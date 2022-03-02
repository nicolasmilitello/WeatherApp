export const FadeIn = `
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 0.7s both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 0.7s both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  `;