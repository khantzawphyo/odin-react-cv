import { toast } from "sonner";
import { Button } from "@components/ui";
import { Link, useLocation } from "react-router";
import usePrintStore from "@stores/usePrintStore";
import useHasCVData from "@hooks/useHasCVData";
import LogoImage from "@assets/logo.png";

const Header = () => {
  const location = useLocation();
  const { printFunction } = usePrintStore();

  const hasCVData = useHasCVData();
  const isEmpty = !hasCVData;

  const isTemplateSelectPage = location.pathname === "/create";
  const isEditorPage = location.pathname === "/editor";

  const handleExportCV = () => {
    if (isEmpty) {
      toast.warning("No CV data to export. Please add some information first.");
      return;
    }

    if (printFunction) {
      printFunction();
      toast.success("Exporting your CV...");
    } else {
      toast.error("CV not ready yet. Please wait a moment.");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div
        className="h-2.5 w-full"
        style={{
          background:
            "linear-gradient(139deg, #FB8811, #ff4b01, #c12127, #e02aff)",
        }}
      />

      <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex cursor-pointer items-center">
          <img src={LogoImage} alt="CVBuilder Logo" className="h-8 w-8" />
          <h1 className="font-display ml-1.5 text-xl font-semibold tracking-tight text-neutral-900">
            CVBuilder
          </h1>
        </Link>

        <nav className="flex items-center gap-6 font-medium tracking-[0.2px]">
          {isEditorPage && (
            <Button
              onClick={handleExportCV}
              // visually indicate disabled state when no data
              className={isEmpty ? "cursor-not-allowed opacity-50" : ""}
              aria-disabled={isEmpty}
            >
              Export CV
            </Button>
          )}

          {isTemplateSelectPage && !isEditorPage && (
            <Link to="/editor">
              <Button>Go to Editor</Button>
            </Link>
          )}

          {!isEditorPage && !isTemplateSelectPage && (
            <>
              <a
                href="#features"
                className="relative hidden cursor-pointer text-neutral-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-neutral-900 hover:after:origin-bottom-left hover:after:scale-x-100 md:block"
              >
                Features
              </a>
              <a
                href="#about"
                className="relative hidden cursor-pointer text-neutral-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-neutral-900 hover:after:origin-bottom-left hover:after:scale-x-100 md:block"
              >
                About
              </a>
              <Link to="/create">
                <Button>Create CV</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
