import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fxvvql9",
        "template_fgkdjt5",
        e.target,
        "-s3V01bc2G8TqqpqH"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="container">
        


        <form ref={form} onSubmit={sendEmail}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="text input"
              name="from_name"
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control ">
            <input
              className="input"
              type="email"
              placeholder="Email input"
              name="user_email"
            ></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea" name="message"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit" value="Send">Submit</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};
