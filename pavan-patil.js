// what is ajax in simple language

// In simple terms, AJAX is a technique used in web development to update parts of a web page without 
// reloading the entire page. It allows web applications to communicate with a server in the background, 
// retrieve data, and update the content dynamically.

// Think of it like this: Imagine you're filling out a form on a website, and as soon as you type 
// something in one of the fields, suggestions start appearing without you having to submit the form 
// or wait for a new page to load. That's AJAX in action.

// AJAX makes web pages more interactive and responsive. It enables smoother user experiences by fetching 
// data from the server and updating the page dynamically, without disrupting the user's flow.

// Under the hood, AJAX uses JavaScript to send requests to a server and receive responses. The data is
//  usually exchanged in formats like JSON or XML. By leveraging AJAX, developers can create web 
//  applications that feel more like desktop applications, with seamless updates and real-time interactions.




// 1.    Social Media Feeds: When you scroll through your social media feed, new posts and updates are loaded 
//       dynamically without refreshing the page. AJAX is used to fetch and display this new content, providing 
//       a seamless user experience.

// import React, { useState, useEffect } from 'react';

// const SocialMediaFeed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://api.example.com/posts');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>Social Media Feed</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SocialMediaFeed;


// 2.     Form Submission: When you submit a form on a website, AJAX can be used to send the form data to the 
//        server in the background without causing a page refresh. This allows for immediate feedback or confirmation
//        messages without disrupting the user's interaction.


// import React, { useState } from 'react';

// const FormSubmission = () => {
//   const [formData, setFormData] = useState({ name: '', email: '' });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await fetch('https://api.example.com/submit', {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       // Handle success or show confirmation message
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle error or show error message
//     }
//   };

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   return (
//     <div>
//       <h1>Form Submission</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormSubmission;


//3.      Auto-Suggest or Search Suggestions: When you start typing in a search box, AJAX can be used to fetch 
//        suggestions or search results in real-time, providing instant feedback and helping you find what you're
//         looking for more efficiently.


// import React, { useState } from 'react';

// const SearchSuggestions = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = async (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     try {
//       const response = await fetch(`https://api.example.com/suggestions?query=${query}`);
//       const data = await response.json();
//       setSuggestions(data);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Search Suggestions</h1>
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {suggestions.map((suggestion) => (
//           <li key={suggestion.id}>{suggestion.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchSuggestions;



// 4.    Chat Applications: AJAX is commonly used in chat applications to send and receive messages in real-time.
//        Messages are sent to the server asynchronously, and new messages are fetched periodically without 
//         refreshing the page, ensuring a smooth chat experience.



// import React, { useState, useEffect } from 'react';

// const ChatApp = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch('https://api.example.com/messages');
//         const data = await response.json();
//         setMessages(data);
//       } catch (error) {
//         console.error('Error fetching messages:', error);
//       }
//     };

//     fetchMessages();
//   }, []);

//   const handleInputChange = (event) => {
//     setNewMessage(event.target.value);
//   };

//   const handleSendMessage = async () => {
//     try {
//       const response = await fetch('https://api.example.com/messages', {
//         method: 'POST',
//         body: JSON.stringify({ message: newMessage }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       setMessages([...messages, data]);
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Chat Application</h1>
//       <div className="message-container">
//         {messages.map((message) => (
//           <div key={message.id} className="message">
//             <span className="sender">{message.sender}: </span>
//             <span className="content">{message.content}</span>
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Type your message"
//           value={newMessage}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;



// 5.     Shopping Cart Updates: In e-commerce applications, AJAX is often used to update the shopping cart 
//        dynamically. When you add or remove items from your cart, AJAX requests are sent to the server to 
//        update the cart's content and display the changes without reloading the entire page.


// import React, { useState } from 'react';

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = async (item) => {
//     try {
//       const response = await fetch('https://api.example.com/cart', {
//         method: 'POST',
//         body: JSON.stringify(item),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       setCartItems([...cartItems, data]);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     try {
//       await fetch(`https://api.example.com/cart/${itemId}`, {
//         method: 'DELETE',
//       });
//       const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//       setCartItems(updatedCartItems);
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <h3>Available Items</h3>
//         <button onClick={() => addToCart({ id: 1, name: 'Item 1', price: 10 })}>
//           Add Item 1
//         </button>
//         <button onClick={() => addToCart({ id: 2, name: 'Item 2', price: 20 })}>
//           Add Item 2
//         </button>
//         <button onClick={() => addToCart({ id: 3, name: 'Item 3', price: 30 })}>
//           Add Item 3
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;



 

