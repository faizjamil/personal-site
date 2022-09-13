// import './style.css'
import './index.css'
// import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#home')!.innerHTML = `
  <nav>
    <ul>
      <li id="home"><a href="index.html">Faizan Jamil</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
  <main>
    <h1>This website is currently under construction</h1>
  </main>
`
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
