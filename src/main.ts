import { apiGet } from "./libs/domain/api/client";
import "./style.css";

const button = document.getElementById("loadData") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLPreElement;

button.addEventListener("click", async () => {
  try {
    const data = await apiGet("/api/hello");
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Erreur: " + err;
  }
});
