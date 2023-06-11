
import React from 'react'
function generateRandomItem() {
    const names = ["John", "Alice", "Bob", "Emma", "David"];
    const texts = [
      "Great video! Really enjoyed it.",
      "Awesome content. Keep it up!",
      "I have a question: [Insert question here].",
      "This helped me a lot. Thanks!",
      "Can you make a tutorial on [Topic]?",
      "I disagree with your point. Here's why: [Insert explanation].",
      "Nice work. Subscribed to your channel!",
      "Your videos are always informative.",
      "I've been following your channel for a while. Love your content!",
      "This deserves more views. Sharing it now!"
    ];
  
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
  
  