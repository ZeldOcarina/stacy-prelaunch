import axios from "axios";

import { form } from "../model/model";

export default function submitFormToSalesJet() {
  function createFeedback(message, success) {
    const newDiv = document.createElement("div");
    newDiv.innerText = message;
    newDiv.style.backgroundColor = success ? "green" : "red";
    newDiv.classList.add("alert-message");
    document.body.appendChild(newDiv);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", document.getElementById("first_name").value);
    formData.append("email", document.getElementById("email").value);

    try {
      const response = await axios({
        method: "POST",
        url: "/f/1119-4539",
        data: formData,
      });

      if (!response.data.success) throw new Error("Lead not saved");

      fbq("track", "Lead");
      createFeedback(
        "Form correctly submitted, we will notify you when the song is out! ⭐🌟",
        true
      );
    } catch (err) {
      console.error(err);
      createFeedback("The form has not been submitted", false);
    }
  });
}
