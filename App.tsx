
import React, { useState, useCallback, useRef } from 'react';
import { CITIES } from './constants';
import { City } from './types';
import { generateImage } from './services/geminiService';

// --- Helper function to read file as Base64 ---
const fileToBase64 = (file: File): Promise<{ data: string, mimeType: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64Data = result.split(',')[1];
      resolve({ data: base64Data, mimeType: file.type });
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
};


// --- UI Components ---

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const Header: React.FC = () => (
  <header className="text-center py-6 md:py-8 border-b border-gray-700">
    <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
      Dünya Turu
    </h1>
    <p className="text-xl text-gray-300 mt-2">nanobanana turizm</p>
    <div className="inline-flex items-center gap-4 text-yellow-500 mt-4 text-lg">
      <span>by Görkem Keser</span>
      <a
        href="https://www.instagram.com/gorkemksr/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-400 transition-colors"
        aria-label="Görkem Keser Instagram"
      >
        <InstagramIcon className="w-5 h-5" />
      </a>
      <a
        href="https://x.com/gorkemksr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-400 transition-colors"
        aria-label="Görkem Keser Twitter"
      >
        <TwitterIcon className="w-5 h-5" />
      </a>
    </div>
  </header>
);

const UploadIcon: React.FC = () => (
    <svg className="w-12 h-12 mx-auto text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  previewUrl: string | null;
}
const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, previewUrl }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onImageUpload(e.target.files[0]);
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">1. Selfie'nizi Yükleyin</h2>
            <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-yellow-500 transition-colors duration-300 flex flex-col justify-center items-center h-64">
                {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="max-h-full max-w-full object-contain rounded-md" />
                ) : (
                    <div className="space-y-2">
                        <UploadIcon/>
                        <p className="text-gray-400">Sürükleyip bırakın veya yüklemek için tıklayın</p>
                        <p className="text-xs text-gray-500">PNG, JPG, WEBP</p>
                    </div>
                )}
            </label>
             <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/png, image/jpeg, image/webp" />
        </div>
    );
};


interface CitySelectorProps {
    onCitySelect: (city: City) => void;
}
const CitySelector: React.FC<CitySelectorProps> = ({ onCitySelect }) => (
    <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">2. Tatilin Başlasın</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CITIES.map(city => (
                <div
                    key={city.id}
                    onClick={() => onCitySelect(city)}
                    className="bg-gray-800 rounded-lg cursor-pointer transform transition-all duration-300 p-3 h-28 flex flex-col justify-center items-center text-center group hover:scale-105 hover:bg-gray-700 active:scale-95 hover:border-yellow-500"
                >
                    <p className="font-bold text-base text-gray-100">{city.name}</p>
                    <p className="text-sm text-gray-400 mt-1">{city.country}</p>
                </div>
            ))}
        </div>
    </div>
);


const Spinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

interface ResultDisplayProps {
  isLoading: boolean;
  generatedImage: string | null;
  error: string | null;
  loadingMessage: string;
}
const ResultDisplay: React.FC<ResultDisplayProps> = ({ isLoading, generatedImage, error, loadingMessage }) => (
    <div className="bg-gray-800 rounded-lg w-full aspect-[16/9] flex justify-center items-center p-4">
        {isLoading ? (
            <div className="text-center">
                <Spinner />
                <p className="text-gray-300 mt-4 text-lg font-medium">{loadingMessage}</p>
            </div>
        ) : error ? (
            <div className="text-center text-red-400">
                <p className="font-bold">Bir hata oluştu</p>
                <p className="text-sm mt-2">{error}</p>
            </div>
        ) : generatedImage ? (
            <img src={`data:image/jpeg;base64,${generatedImage}`} alt="Generated art" className="object-contain max-w-full max-h-full rounded-md shadow-lg" />
        ) : (
            <div className="text-center text-gray-500">
                <p className="text-lg">Maceranız sizi bekliyor!</p>
                <p>Başlamak için bir fotoğraf yükleyin ve bir şehir seçin.</p>
            </div>
        )}
    </div>
);


// --- Main App Component ---

export default function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedFilePreview, setUploadedFilePreview] = useState<string | null>(null);
  const [processingCity, setProcessingCity] = useState<City | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = useCallback((file: File) => {
    setUploadedFile(file);
    setUploadedFilePreview(URL.createObjectURL(file));
    // Reset previous results when a new image is uploaded
    setGeneratedImage(null);
    setError(null);
    setProcessingCity(null);
  }, []);

  const handleImageGeneration = useCallback(async (city: City) => {
    setProcessingCity(city);

    if (!uploadedFile) {
        setError("Lütfen bir şehir seçmeden önce bir fotoğraf yükleyin.");
        return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    // Smooth scroll to results
    setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    try {
        const { data, mimeType } = await fileToBase64(uploadedFile);
        
        const finalPrompt = `A cinematic, horizontal landscape (16:9 aspect ratio). ${city.prompt}. The final image composition MUST be strictly horizontal.`;
        
        const imageResult = await generateImage(finalPrompt, data, mimeType);
        setGeneratedImage(imageResult);
    } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError("Bilinmeyen bir hata oluştu.");
        }
    } finally {
        setIsLoading(false);
    }
  }, [uploadedFile]);

  const handleSaveImage = useCallback(() => {
    if (!generatedImage || !processingCity) return;

    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${generatedImage}`;
    link.download = `dunya-turu-${processingCity.id}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [generatedImage, processingCity]);

  
  const isSaveButtonDisabled = !generatedImage || isLoading;
  const loadingMessage = processingCity?.loadingMessage || "Oluşturuluyor...";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Controls */}
          <div className="flex flex-col gap-8">
            <ImageUploader onImageUpload={handleImageUpload} previewUrl={uploadedFilePreview} />
            <CitySelector 
              onCitySelect={handleImageGeneration}
            />
          </div>

          {/* Right Column: Result and Action Button */}
          <div ref={resultRef} className="flex flex-col gap-6 lg:sticky top-8 self-start">
            <h2 className="text-2xl font-semibold text-gray-200">3. Sonuç</h2>
            <ResultDisplay isLoading={isLoading} generatedImage={generatedImage} error={error} loadingMessage={loadingMessage} />
            <button
                onClick={handleSaveImage}
                disabled={isSaveButtonDisabled}
                className="w-full bg-yellow-500 text-gray-900 font-bold py-4 px-4 rounded-lg text-xl shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              Fotoğrafı Kaydet
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
