import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-corporate-light/30">
      <div className="container-corporate">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Marketing Pro</h3>
            <p className="text-sm text-muted-foreground">© 2025 Marketing Pro. Todos os direitos reservados.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;