export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black">
            <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Botyama. All rights reserved.</p>
            </div>
        </footer>
    );
}
