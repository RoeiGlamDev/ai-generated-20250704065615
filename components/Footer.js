export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 GoldTube</p>
        <p>
          Powered by{' '}
          <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
            Pexels
          </a>
        </p>
      </div>
    </footer>
  );
}