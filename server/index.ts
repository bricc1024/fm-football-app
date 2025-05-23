import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
