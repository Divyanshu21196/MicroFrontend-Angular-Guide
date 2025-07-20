import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: false,
  templateUrl: './feature.component.html',
  styles: [`
    .mf-guide-container {
      max-width: 800px;
      margin: 40px auto;
      padding: 32px;
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);
      font-family: Arial, sans-serif;
    }
    .mf-guide-container h1 {
      color: #1976d2;
      margin-bottom: 16px;
      text-align: center;
    }
    .mf-guide-container h2, .mf-guide-container h3 {
      color: #1565c0;
      margin-top: 24px;
      margin-bottom: 12px;
    }
    .mf-guide-container ul {
      margin-bottom: 16px;
      padding-left: 20px;
    }
    .mf-guide-container pre {
      background: #e3eafc;
      padding: 10px;
      border-radius: 4px;
      font-size: 15px;
      margin: 8px 0 16px 0;
      overflow-x: auto;
      font-family: 'Fira Mono', monospace;
    }
    .mf-guide-container code {
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 15px;
    }
    .mf-guide-container a {
      color: #1976d2;
      text-decoration: underline;
    }
      .back-btn {
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 8px 18px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 18px;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #1565c0;
} 
  `]
})
export class FeatureComponent {}