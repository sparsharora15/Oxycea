import { sendmail } from "@/Config/API";
import React from "react";
import '@/app/globals.css'
const Contact = () => {
  const [emailData, setEmailData] = React.useState({ subject: "", desc: "" });
  const { subject, desc } = emailData;
  function handleOnChnage(e) {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
    console.log(emailData);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    sendmail(emailData)
      .then((result) => {
        if (result.status === 200) {
          alert(result?.data?.message);
        }
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="p-6 flex w-full justify-center items-center  flex-col">
      <form className=" p-3 w-1/2">
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium ">Your subject</label>
          <input
            type="text"
            id="success"
            name="subject"
            class="bg-green-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700"
            onChange={(e) => handleOnChnage(e)}
            placeholder="Your Subject"
          />
        </div>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea
              id="comment"
              rows="4"
              name="desc"
              onChange={(e) => handleOnChnage(e)}
              class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              onClick={(e) => handleOnSubmit(e)}
            >
              send mail
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
