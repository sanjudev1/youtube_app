
import React from 'react'
export const names = ["John","Sanju","Samuel","Raju","Nani","Rammy","Prasanna","Valli", "Madhu", "Lavanya", "Karthik", "Vamsi","Srikanth","Punneth","Asyia","chandini","Ajay","vikitha","Sravani","Prasanth","Abhishek","Vinay","Sai","Kiran","Lekhya","Srujana","Ramesh","Imithiyaz","Manohar","devikha","Pavan","Divya"];
   export  const texts = [
      "Great video! Really enjoyed it.❤️❤️❤️❤️❤️",
      "Awesome content. Keep it up!🎊🎊💥💥💥💥💥",
      "I dont have a question on this topic ✈️✈️🌙🌙🌙🌙",
      "This helped me a lot. Thanks!🐤🐤🐤🐤❤️❤️",
      "Can you make a tutorial on WebSockets? 🎊🎊🌙🌙🌙🎊🎊",
      "I disagree with your point👶👶. Here's why:💥💥💥💥❤️❤️❤️❤️.",
      "Nice work. Subscribed to your channel🎊🎊🎊🎊!",
      "Your videos are always informative.✈️✈️✈️💅💅",
      "I've been following your channel for a while. Love your content!😀😀🎈🎈🎈🎈🎈",
      "This deserves more views. Sharing it now!🐦🐦🐦🐦🐦🐦",
      "Great job on this project! 👏👍",
      "I really enjoyed reading your article. 📚😄",
      "Awesome work! Keep it up. 🚀💪",
      "This is so helpful. Thank you! 🙏😊",
      "I love the design of your website. 💻🎨",
      "Congratulations on your achievement! 🎉🥳",
      "Thanks for sharing such valuable information. 💡💼",
      "You've got a unique writing style. I like it! ✍️👌",
      "Your presentation was engaging and informative. 🗣️💡",
      "I appreciate your attention to detail. 🔍👀",
      "You've inspired me with your creativity. 💡🎨",
      "Well done on completing the task ahead of schedule. ⏰👏",
      "Your ideas are thought-provoking and insightful. 💡🤔",
      "I'm impressed by your problem-solving skills. 🧩🤩",
      "Thank you for your prompt response. ⏳📩",
      "Your teamwork and collaboration are commendable. 🤝👥",
      "I found your tutorial easy to follow and understand. 🎓👨‍🏫",
      "You've demonstrated excellent leadership qualities. 👑👏",
      "Your positive attitude is contagious. 😄🌞",
      "I'm grateful for your support and assistance. 🙌🤗"
    ];
  

function generateRandomItem() {
    
    const item = {
      name: names[Math.floor(Math.random() * names.length)], 
      text: texts[Math.floor(Math.random() * texts.length)],
      replies: []
    };
  
    // Generate random replies
    const numReplies = Math.floor(Math.random() * 5); // Maximum 5 replies per item
    for (let i = 0; i < numReplies; i++) {
      const reply = {
        name: names[Math.floor(Math.random() * names.length)],
        text: texts[Math.floor(Math.random() * texts.length)]
      };
      item.replies.push(reply);
    }
  
    return item;
  }
  
  // Generate list of 50 items
  const itemList = [];
  for (let i = 0; i < 15; i++) {
    itemList.push(generateRandomItem());
  }
  
export const COMMENT_LIST=itemList
  
  