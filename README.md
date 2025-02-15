<!DOCTYPE html>
<html>
<head>
  <title>Productivity Tracker Extension - README</title>
</head>
<body>
  <h1>⏱️ Productivity Tracker Chrome Extension</h1>

  <h2>📜 About</h2>
  <p>The Productivity Tracker extension helps users monitor time spent on different websites, track daily browsing habits, and set usage limits for better time management.</p>

  <h2>🛠️ Technologies and Version</h2>
  <ul>
    <li><strong>Version:</strong> 1.0.0</li>
    <li>React 18</li>
    <li>JavaScript (ES6+)</li>
    <li>Chrome Extensions API</li>
    <li>HTML5/CSS3</li>
    <li>Recharts (for graphical representation)</li>
  </ul>

  <h2>⚙️ How to Run</h2>
  <ol>
    <li>Clone the repository:<br>
      <code>git clone https://github.com/yourusername/productivity-tracker.git</code>
    </li>
    <li>Navigate to the directory and install dependencies:<br>
      <code>npm install</code>
    </li>
    <li>Build the project:<br>
      <code>npm run build</code>
    </li>
    <li>Open Chrome and visit <strong>chrome://extensions</strong>.</li>
    <li>Enable <strong>Developer mode</strong> and load the <strong>build</strong> folder.</li>
  </ol>

  <h2>💡 Features</h2>
  <ul>
    <li>Track time spent on individual websites.</li>
    <li>Display usage data using bar and pie charts.</li>
    <li>Set daily time limits for specific sites.</li>
    <li>Clear usage history with a reset button.</li>
    <li>Persistent storage using <code>chrome.storage</code>.</li>
  </ul>

  <h2>🚧 Challenges Faced</h2>
  <ul>
    <li>Efficiently logging time without performance issues.</li>
    <li>Implementing real-time chart updates with React and Recharts.</li>
  </ul>

  <h2>👨‍💻 Author</h2>
  <p>Developed by: <strong>Your Name</strong></p>
  <p>Licensed under the MIT License.</p>
</body>
</html>
