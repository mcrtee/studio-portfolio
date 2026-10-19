import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      ...(process.env.FRONTEND_URL
        ? [process.env.FRONTEND_URL]
        : []),
    ],
  })
);

app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, message = "", lang = "en" } = req.body ?? {};

    if (
      typeof name !== "string" ||
      typeof phone !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        error: "Invalid form data",
      });
    }

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 100 ||
      cleanPhone.length < 5 ||
      cleanPhone.length > 30 ||
      cleanMessage.length > 2000
    ) {
      return res.status(400).json({
        success: false,
        error: "Please check the form fields",
      });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram environment variables are missing");

      return res.status(500).json({
        success: false,
        error: "Server is not configured",
      });
    }

    const title =
      lang === "ru" ? "Новая заявка с сайта" : "New website inquiry";

    // Plain text message: user input is not interpreted as HTML.
    const telegramMessage = [
      `📩 ${title}`,
      "",
      `👤 Name: ${cleanName}`,
      `📞 Phone: ${cleanPhone}`,
      `💬 Message: ${cleanMessage || "—"}`,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
        signal: AbortSignal.timeout(10000),
      }
    );

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error(
        "Telegram rejected the message:",
        telegramResult.description || telegramResponse.status
      );

      return res.status(502).json({
        success: false,
        error: "Telegram delivery failed",
      });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error.message);

    return res.status(500).json({
      success: false,
      error: "Could not send the inquiry",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});