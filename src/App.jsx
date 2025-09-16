import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React App Deployment to AWS</h1>
      <div className="card">
        <h3>About AWS</h3>
        <p>
          Amazon Web Services (AWS) is a cloud platform that provides on-demand
          computing, storage, networking, and application services. Instead of
          buying and managing physical servers, you can use AWS to run and scale
          apps globally.
        </p>
        <h4>Key AWS Services for Deploying Apps</h4>
        <p>
          Depending on your app type (web, mobile, APIs, containers,
          serverless), you can choose:
        </p>
        <div>
          <h5>1. Amazon EC2 (Elastic Compute Cloud)</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>➡️ Virtual servers in the cloud.</li>
            <li>➡️ You control the OS, runtime, and deployments.</li>
            <li>
              Good for custom apps, monoliths, or when you want full control.
            </li>
          </ul>
          <h5>2. Elastic Beanstalk</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>➡️ Platform as a Service (PaaS).</li>
            <li>
              ➡️ You deploy code, AWS manages servers, scaling, and load
              balancing.
            </li>
            <li>➡️ Works for Java, Node.js, Python, PHP, etc.</li>
          </ul>
          <h5>
            3. Amazon ECS (Elastic Container Service) / EKS (Elastic Kubernetes
            Service)
          </h5>
          <ul style={{ listStyleType: "none" }}>
            <li>➡️ Run containerized apps (Docker, Kubernetes).</li>
            <li>➡️ Great for microservices and scalable architectures.</li>
          </ul>

          <h5>4. AWS Lambda</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>
              ➡️ Serverless compute: just upload your code, no servers to
              manage.
            </li>
            <li>
              ➡️ Best for APIs, event-driven tasks, lightweight backend logic.
            </li>
          </ul>

          <h5>5. Amazon Lightsail</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>➡️ Simplified hosting (like a VPS).</li>
            <li>➡️ Good for small apps, blogs, or simple websites.</li>
          </ul>

          <h5>6. Amazon Amplify</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>
              ➡️ For frontend and mobile apps (React, Vue, Angular, iOS,
              Android).
            </li>
            <li>
              ➡️ Includes CI/CD, hosting, and backend (API, auth, storage).
            </li>
          </ul>

          <h5>7. Amazon S3 + CloudFront</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>➡️ Host static websites (HTML, CSS, JS) with global CDN.</li>
            <li>➡️ Very cheap and scalable.</li>
          </ul>
        </div>
      </div>
      <p className="read-the-docs">
        &copy; 2025 <span>ReactAppDeployInAWS</span>
      </p>
    </>
  );
}

export default App;
