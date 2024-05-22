import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('login-button')
export class LoginButton extends LitElement {
  @property({ type: Boolean }) signedIn = false;
  @property({ type: String }) avatarUrl = '';

  @state() private popoverVisible = false;

  static readonly styles = css`
    .button-container {
      position: relative;
      display: inline-block;
    }

    .login-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      min-width: 130px;
      height: 52px;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .popover {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #f9f9f9;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;
      z-index: 1000;
    }

    .popover.visible {
      display: block;
    }

    .popover-button {
      display: block;
      width: 100%;
      padding: 10px 20px;
      text-align: left;
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      color: #333;
      transition: background-color 0.3s;
    }

    .popover-button:hover {
      background-color: #e9e9e9;
    }
  `;

  togglePopover(): boolean {
    this.popoverVisible = !this.popoverVisible;
    return this.popoverVisible;
  }

  signIn(): void {
    console.log('Sign In button clicked');
    this.signedIn = true;
    this.togglePopover();
  }

  signOut(): void {
    console.log('Sign Out button clicked');
    this.signedIn = false;
    this.togglePopover();
  }

  render() {
    return html`
      <div class="button-container">
        <button class="login-button" @click=${this.togglePopover}>
          ${this.signedIn && this.avatarUrl ? html`<img class="avatar" src=${this.avatarUrl} alt="Profile Avatar">` : ''}
          Profile
        </button>
        <div class="popover ${this.popoverVisible ? 'visible' : ''}">
          ${this.signedIn ?
            html`<button class="popover-button" @click=${this.signOut}>Sign Out</button>` :
            html`<button class="popover-button" @click=${this.signIn}>Sign In</button>`
          }
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-button': LoginButton;
  }
}
