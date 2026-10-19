import type { Request, Response } from "express";
import  express  from "express";
const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());

// Home route
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello! My TypeScript server is running in Docker.");
});

// Health check route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});