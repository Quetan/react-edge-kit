// export type Theme = 'Rose' | 'Blue' | 'Green' | 'Orange';

const themes = {
	Rose: `
    @layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 240 10% 3.9%;
      --card: 0 0% 100%;
      --card-foreground: 240 10% 3.9%;
      --popover: 0 0% 100%;
      --popover-foreground: 240 10% 3.9%;
      --primary: 346.8 77.2% 49.8%;
      --primary-foreground: 355.7 100% 97.3%;
      --secondary: 240 4.8% 95.9%;
      --secondary-foreground: 240 5.9% 10%;
      --muted: 240 4.8% 95.9%;
      --muted-foreground: 240 3.8% 46.1%;
      --accent: 240 4.8% 95.9%;
      --accent-foreground: 240 5.9% 10%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 0 0% 98%;
      --border: 240 5.9% 90%;
      --input: 240 5.9% 90%;
      --ring: 346.8 77.2% 49.8%;
      --radius: 0.3rem;
    }
  
    .dark {
      --background: 20 14.3% 4.1%;
      --foreground: 0 0% 95%;
      --card: 24 9.8% 10%;
      --card-foreground: 0 0% 95%;
      --popover: 0 0% 9%;
      --popover-foreground: 0 0% 95%;
      --primary: 346.8 77.2% 49.8%;
      --primary-foreground: 355.7 100% 97.3%;
      --secondary: 240 3.7% 15.9%;
      --secondary-foreground: 0 0% 98%;
      --muted: 0 0% 15%;
      --muted-foreground: 240 5% 64.9%;
      --accent: 12 6.5% 15.1%;
      --accent-foreground: 0 0% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 85.7% 97.3%;
      --border: 240 3.7% 15.9%;
      --input: 240 3.7% 15.9%;
      --ring: 346.8 77.2% 49.8%;
    }
  }
  `,
	Blue: `
    @layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 222.2 84% 4.9%;
      --card: 0 0% 100%;
      --card-foreground: 222.2 84% 4.9%;
      --popover: 0 0% 100%;
      --popover-foreground: 222.2 84% 4.9%;
      --primary: 221.2 83.2% 53.3%;
      --primary-foreground: 210 40% 98%;
      --secondary: 210 40% 96.1%;
      --secondary-foreground: 222.2 47.4% 11.2%;
      --muted: 210 40% 96.1%;
      --muted-foreground: 215.4 16.3% 46.9%;
      --accent: 210 40% 96.1%;
      --accent-foreground: 222.2 47.4% 11.2%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 210 40% 98%;
      --border: 214.3 31.8% 91.4%;
      --input: 214.3 31.8% 91.4%;
      --ring: 221.2 83.2% 53.3%;
      --radius: 0.3rem;
    }
  
    .dark {
      --background: 222.2 84% 4.9%;
      --foreground: 210 40% 98%;
      --card: 222.2 84% 4.9%;
      --card-foreground: 210 40% 98%;
      --popover: 222.2 84% 4.9%;
      --popover-foreground: 210 40% 98%;
      --primary: 217.2 91.2% 59.8%;
      --primary-foreground: 222.2 47.4% 11.2%;
      --secondary: 217.2 32.6% 17.5%;
      --secondary-foreground: 210 40% 98%;
      --muted: 217.2 32.6% 17.5%;
      --muted-foreground: 215 20.2% 65.1%;
      --accent: 217.2 32.6% 17.5%;
      --accent-foreground: 210 40% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 210 40% 98%;
      --border: 217.2 32.6% 17.5%;
      --input: 217.2 32.6% 17.5%;
      --ring: 224.3 76.3% 48%;
    }
  }  
  `,
	Green: `
    @layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 240 10% 3.9%;
      --card: 0 0% 100%;
      --card-foreground: 240 10% 3.9%;
      --popover: 0 0% 100%;
      --popover-foreground: 240 10% 3.9%;
      --primary: 142.1 76.2% 36.3%;
      --primary-foreground: 355.7 100% 97.3%;
      --secondary: 240 4.8% 95.9%;
      --secondary-foreground: 240 5.9% 10%;
      --muted: 240 4.8% 95.9%;
      --muted-foreground: 240 3.8% 46.1%;
      --accent: 240 4.8% 95.9%;
      --accent-foreground: 240 5.9% 10%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 0 0% 98%;
      --border: 240 5.9% 90%;
      --input: 240 5.9% 90%;
      --ring: 142.1 76.2% 36.3%;
      --radius: 0.3rem;
    }
  
    .dark {
      --background: 20 14.3% 4.1%;
      --foreground: 0 0% 95%;
      --card: 24 9.8% 10%;
      --card-foreground: 0 0% 95%;
      --popover: 0 0% 9%;
      --popover-foreground: 0 0% 95%;
      --primary: 142.1 70.6% 45.3%;
      --primary-foreground: 144.9 80.4% 10%;
      --secondary: 240 3.7% 15.9%;
      --secondary-foreground: 0 0% 98%;
      --muted: 0 0% 15%;
      --muted-foreground: 240 5% 64.9%;
      --accent: 12 6.5% 15.1%;
      --accent-foreground: 0 0% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 85.7% 97.3%;
      --border: 240 3.7% 15.9%;
      --input: 240 3.7% 15.9%;
      --ring: 142.4 71.8% 29.2%;
    }
  }  
  `,
	Orange: `
    @layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 20 14.3% 4.1%;
      --card: 0 0% 100%;
      --card-foreground: 20 14.3% 4.1%;
      --popover: 0 0% 100%;
      --popover-foreground: 20 14.3% 4.1%;
      --primary: 24.6 95% 53.1%;
      --primary-foreground: 60 9.1% 97.8%;
      --secondary: 60 4.8% 95.9%;
      --secondary-foreground: 24 9.8% 10%;
      --muted: 60 4.8% 95.9%;
      --muted-foreground: 25 5.3% 44.7%;
      --accent: 60 4.8% 95.9%;
      --accent-foreground: 24 9.8% 10%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 60 9.1% 97.8%;
      --border: 20 5.9% 90%;
      --input: 20 5.9% 90%;
      --ring: 24.6 95% 53.1%;
      --radius: 0.3rem;
    }
  
    .dark {
      --background: 20 14.3% 4.1%;
      --foreground: 60 9.1% 97.8%;
      --card: 20 14.3% 4.1%;
      --card-foreground: 60 9.1% 97.8%;
      --popover: 20 14.3% 4.1%;
      --popover-foreground: 60 9.1% 97.8%;
      --primary: 20.5 90.2% 48.2%;
      --primary-foreground: 60 9.1% 97.8%;
      --secondary: 12 6.5% 15.1%;
      --secondary-foreground: 60 9.1% 97.8%;
      --muted: 12 6.5% 15.1%;
      --muted-foreground: 24 5.4% 63.9%;
      --accent: 12 6.5% 15.1%;
      --accent-foreground: 60 9.1% 97.8%;
      --destructive: 0 72.2% 50.6%;
      --destructive-foreground: 60 9.1% 97.8%;
      --border: 12 6.5% 15.1%;
      --input: 12 6.5% 15.1%;
      --ring: 20.5 90.2% 48.2%;
    }
  }
  `
};

export default themes;
