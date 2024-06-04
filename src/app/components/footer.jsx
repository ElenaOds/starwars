export default function Footer() {

    const date = new Date().getFullYear();
    
      return (
        <footer className="py-5 px-10 border-t-2 border-amber-400">
          <p className="text-xs text-blue-400 text-center">© {date}. All rights are reserved.</p>
        </footer>
      );
    }
    