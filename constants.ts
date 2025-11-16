import { City } from './types';

export const CITIES: City[] = [
    {
        id: 'paris',
        name: 'Paris',
        country: 'Fransa',
        imageUrl: 'https://picsum.photos/seed/paris/400/300',
        loadingMessage: 'Paris anınız hazırlanıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a stylish person wearing a classic beige trench coat over a fine-knit crewneck sweater, sitting on a wrought-iron chair at a Parisian café-terrasse.
Scene Details: On the marble-topped table, a half-eaten croissant, a steaming cup of café crème, and a vintage book. In the background, the silhouette of the Eiffel Tower is sharp against a sunset sky painted with orange and pink hues.
Lighting & Mood: The magical light of the 'golden hour,' creating warm, soft tones and long shadows. The mood is contemplative, peaceful, and timeless.
Camera & Technique: Shot on a DSLR with a 50mm f/1.8 lens. Shallow depth of field, creating a beautiful bokeh effect in the background while the person is in sharp focus. Subtle film grain texture.
Quality: Cinematic composition, 8K, hyper-detailed, professional color grading, sharp focus on the person's thoughtful facial expression.`
    },
    {
        id: 'rome',
        name: 'Roma',
        country: 'İtalya',
        imageUrl: 'https://picsum.photos/seed/rome/400/300',
        loadingMessage: 'Aşk Çeşmesi\'nde dilek tutuluyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a stylish person dressed in a crisp white linen shirt and tailored dark trousers, captured in a candid moment, gently tossing a coin over their shoulder into the Fontana di Trevi in Rome.
Scene Details: The magnificent baroque sculptures and cascading waters of the fountain create a breathtaking, softly blurred (bokeh) background. The scene is set during the 'blue hour,' just after sunset.
Lighting & Mood: The ambient light is a deep, soft blue, beautifully contrasted by the warm, golden artificial lights illuminating the fountain's marble statues. The mood is magical, romantic, and filled with a sense of hopeful nostalgia, as if making a timeless wish.
Camera & Technique: Shot on a Sony A7R IV with a G-Master 85mm f/1.4 lens. Aperture set to f/1.8 to achieve a shallow depth of field, ensuring the person is in sharp focus while the background is artistically blurred. A subtle cinematic grain is applied, giving it a timeless, filmic quality.
Quality: Cinematic composition following the rule of thirds, 8K, hyper-detailed, professional color grading, tack-sharp focus on the person's serene facial expression and the coin glinting in the light.`
    },
    {
        id: 'tokyo',
        name: 'Tokyo',
        country: 'Japonya',
        imageUrl: 'https://picsum.photos/seed/tokyo/400/300',
        loadingMessage: 'Tokyo\'nun neon ışıklarında kayboluyorsunuz...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a stylish person in a modern, minimalist dark raincoat, holding a clear bubble umbrella while navigating the vibrant, crowded Shibuya Crossing at night.
Scene Details: The scene is drenched in the glow of immense neon signs and video billboards. Rain slickens the asphalt, creating stunning reflections of the city lights. A sea of people with umbrellas creates a dynamic, blurred motion background.
Lighting & Mood: The lighting is purely from the chaotic, colorful neon signs, creating a Blade Runner-esque, cyberpunk aesthetic. The mood is energetic, anonymous yet profound, and distinctly futuristic.
Camera & Technique: Shot on a full-frame mirrorless camera with a 35mm f/1.4 lens. Aperture at f/1.8 to isolate the person from the bustling crowd with a shallow depth of field. A hint of motion blur in the background to convey movement.
Quality: Cinematic composition, 8K, hyper-detailed, professional color grading with an emphasis on vibrant blues, pinks, and cyans. Tack-sharp focus on the person's contemplative expression amidst the chaos.`
    },
    {
        id: 'venice',
        name: 'Venedik',
        country: 'İtalya',
        imageUrl: 'https://picsum.photos/seed/venice/400/300',
        loadingMessage: 'Venedik kanallarında romantik bir gezinti...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a serene person wearing a classic striped Breton shirt, reclining in a traditional black gondola as it glides through a narrow, historic Venetian canal.
Scene Details: Ancient, weathered buildings with colorful facades rise directly from the water on both sides. The person is trailing their hand gently in the canal's calm water. The gondolier is partially visible and blurred in the background.
Lighting & Mood: The warm, golden light of the late afternoon sun streams between the buildings, creating long shadows and sparkling reflections on the water's surface. The mood is timeless, romantic, and deeply peaceful.
Camera & Technique: Shot on a Leica M11 with a 50mm Summilux f/1.4 lens. The shallow depth of field keeps the person in sharp focus while rendering the historic architecture in a soft, dreamy bokeh.
Quality: 8K, hyper-detailed, professional color grading with warm, painterly tones. Focus is sharp on the person's relaxed posture and the texture of the aged wood of the gondola.`
    },
    {
        id: 'newyork',
        name: 'New York',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/newyork/400/300',
        loadingMessage: 'New York silüeti karşısında poz veriliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a confident person in a stylish all-black outfit (e.g., leather jacket, dark jeans), standing on a rooftop in Brooklyn, looking out over the illuminated Manhattan skyline at dusk.
Scene Details: The iconic silhouettes of the Empire State Building and other skyscrapers are visible across the East River. City lights are beginning to twinkle, creating a vast, glittering bokeh background. A faint trail of traffic lights is visible below.
Lighting & Mood: The 'blue hour' provides a deep blue ambient light for the sky, contrasting beautifully with the warm, golden glow of the city lights. The mood is ambitious, powerful, and cinematic.
Camera & Technique: Shot on a Canon EOS R5 with an 85mm f/1.2 lens to achieve magnificent background compression and creamy bokeh. A subtle lens flare from a distant streetlight adds to the cinematic feel.
Quality: 8K, hyper-detailed, professional color grading with deep blues and vibrant oranges. Tack-sharp focus on the person's determined profile against the sprawling cityscape.`
    },
    {
        id: 'kyoto',
        name: 'Kyoto',
        country: 'Japonya',
        imageUrl: 'https://picsum.photos/seed/kyoto/400/300',
        loadingMessage: 'Kyoto bambu ormanında huzur bulunuyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in minimalist, earth-toned attire (like a linen Haori-style jacket), walking peacefully along the path in the Arashiyama Bamboo Grove.
Scene Details: Towering stalks of green bamboo create a natural cathedral, forming a dense canopy overhead. The path winds gently into the distance.
Lighting & Mood: Soft, diffused sunlight filters down through the bamboo stalks, creating a serene, ethereal glow and beautiful patterns of light and shadow on the ground. The mood is meditative, tranquil, and spiritual.
Camera & Technique: Shot with a Fujifilm GFX 100S medium format camera with an 80mm f/1.7 lens, capturing immense detail and a subtle, natural color palette. The vertical lines of the bamboo dominate the composition.
Quality: 8K, hyper-detailed, professional color grading emphasizing natural greens and browns. Focus is on the person's calm expression and the texture of their clothing.`
    },
    {
        id: 'santorini',
        name: 'Santorini',
        country: 'Yunanistan',
        imageUrl: 'https://picsum.photos/seed/santorini/400/300',
        loadingMessage: 'Ege rüyası gerçeğe dönüşüyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a relaxed person in light, airy white and blue clothing, leaning against a whitewashed wall in Oia, overlooking the deep blue caldera.
Scene Details: The iconic blue-domed churches and white Cycladic architecture cascade down the cliffside in the background. Bright pink bougainvillea flowers add a splash of color. The Aegean Sea stretches to the horizon.
Lighting & Mood: Bright, unfiltered midday sun creates sharp, defined shadows and makes the white walls and blue sea incredibly vibrant. The mood is blissful, serene, and captures the essence of a perfect summer holiday.
Camera & Technique: Shot on a Hasselblad X2D with a 38mm f/2.5 lens. The composition uses the natural leading lines of the architecture to frame the person. A polarizing filter is used to enhance the deep blue of the sky and sea.
Quality: 8K, hyper-detailed, with a clean, high-contrast look. Professional color grading emphasizes the iconic white and blue palette. Focus is on the person's contented smile.`
    },
    {
        id: 'prague',
        name: 'Prag',
        country: 'Çekya',
        imageUrl: 'https://picsum.photos/seed/prague/400/300',
        loadingMessage: 'Prag\'ın gotik masalında bir sayfa açılıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a pensive person wearing a long, dark wool coat, standing on the historic Charles Bridge at dawn, with Prague Castle looming in the background.
Scene Details: A thick morning mist rises from the Vltava River, partially obscuring the bridge's gothic statues and the distant castle, creating layers in the composition. The cobblestones of the bridge are damp and reflective.
Lighting & Mood: The soft, diffused light of a foggy pre-dawn morning. The only light sources are the faint glow of the sky and old-fashioned streetlamps on the bridge. The mood is mysterious, melancholic, and deeply atmospheric, like a scene from a fairytale.
Camera & Technique: Shot on a Sony A7S III (known for low-light performance) with a 50mm f/1.2 lens. The wide aperture captures the limited light and creates a soft bokeh from the distant castle lights.
Quality: 8K, hyper-detailed, with a desaturated, moody color grade. A fine layer of film grain is added to enhance the timeless feel. Sharp focus on the person's thoughtful expression.`
    },
    {
        id: 'istanbul',
        name: 'İstanbul',
        country: 'Türkiye',
        imageUrl: 'https://picsum.photos/seed/istanbul/400/300',
        loadingMessage: 'İstanbul\'da tarih ve çay keyfi yapılıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person sitting at an outdoor cafe in Sultanahmet, holding a traditional tulip-shaped glass of Turkish tea.
Scene Details: In the soft-focus background, the majestic silhouette of the Hagia Sophia or the Blue Mosque is visible against the dawn sky. A few seagulls are captured mid-flight. The steam gently rises from the tea glass.
Lighting & Mood: The gentle, warm light of early sunrise. The sky is painted in soft pinks and oranges. The mood is contemplative, peaceful, and respectful of the city's profound history.
Camera & Technique: Shot on a Nikon Z9 with a 105mm f/1.8 portrait lens, providing excellent separation between the subject and the iconic background. The focus is critically sharp on the person and the tea glass.
Quality: 8K, hyper-detailed, with a warm, inviting color palette. Focus captures the intricate details of the tea glass and the person's calm, observant gaze.`
    },
    {
        id: 'barcelona',
        name: 'Barselona',
        country: 'İspanya',
        imageUrl: 'https://picsum.photos/seed/barcelona/400/300',
        loadingMessage: 'Gaudí\'nin renkli dünyasına adım atılıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), an artistic person with a relaxed posture, sitting on the famous curving mosaic bench (Trencadís) in Gaudí's Park Güell.
Scene Details: The vibrant, colorful mosaic tiles of the bench are in sharp detail in the foreground. The background shows a panoramic, sun-drenched view of Barcelona city.
Lighting & Mood: Bright, warm Spanish afternoon sunlight. The light brings out the vivid colors of the mosaics. The mood is creative, joyful, and full of life.
Camera & Technique: Shot with a Canon EOS R6 with a 35mm f/1.8 lens to capture both the person and the surrounding architectural details. A wide aperture creates a gentle blur on the cityscape behind.
Quality: 8K, hyper-detailed, professional color grading that makes the colors pop. Focus is on the person's happy expression and the texture of the mosaic tiles.`
    },
    {
        id: 'rio',
        name: 'Rio de Janeiro',
        country: 'Brezilya',
        imageUrl: 'https://picsum.photos/seed/rio/400/300',
        loadingMessage: 'Rio de Janeiro\'da gün batımı izleniyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a joyful person with arms slightly outstretched, standing at the viewpoint on Sugarloaf Mountain, looking over the breathtaking landscape of Rio at sunset.
Scene Details: The panoramic view includes the famous Christ the Redeemer statue in the distance, Guanabara Bay, and the sprawling city nestled between mountains. The cable car is visible in the distance.
Lighting & Mood: The spectacular, fiery colors of a tropical sunset. The golden hour light bathes the entire scene in a warm, magical glow. The mood is euphoric, free, and awe-inspiring.
Camera & Technique: Shot with a wide-angle 24mm f/1.4 lens to capture the epic scale of the landscape while keeping the person prominent in the frame. A slight lens flare from the setting sun adds a dramatic effect.
Quality: 8K, hyper-detailed, with a vibrant, high-contrast color grade. Focus is on the person's silhouette and exhilarated expression against the magnificent backdrop.`
    },
    {
        id: 'amsterdam',
        name: 'Amsterdam',
        country: 'Hollanda',
        imageUrl: 'https://picsum.photos/seed/amsterdam/400/300',
        loadingMessage: 'Amsterdam kanallarında bisiklet turu...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a smart-casual jacket, leaning against a classic Dutch bicycle on a charming bridge over a canal.
Scene Details: Picturesque 17th-century canal houses with their gabled facades line the background. The calm water of the canal reflects the buildings and the morning sky. A few autumn leaves might be scattered on the ground.
Lighting & Mood: Soft, clear morning light. The low angle of the sun creates a gentle, flattering glow. The mood is relaxed, charming, and effortlessly cool.
Camera & Technique: Shot with a Fujifilm X-T5 with a 33mm f/1.4 lens (50mm equivalent), known for its beautiful film-like color science. The composition is balanced and peaceful.
Quality: 8K, hyper-detailed, with a natural and slightly warm color palette. Focus is sharp on the person and the details of the vintage-style bicycle.`
    },
    {
        id: 'marrakech',
        name: 'Marakeş',
        country: 'Fas',
        imageUrl: 'https://picsum.photos/seed/marrakech/400/300',
        loadingMessage: 'Marakeş çarşısının egzotik atmosferi...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a curious person examining handcrafted leather goods at a stall deep within the bustling, labyrinthine souks of Marrakesh.
Scene Details: The background is a rich tapestry of colors and textures: piles of vibrant spices, hanging lanterns, intricate carpets, and other market goods. Shafts of light pierce through the covered roof of the market.
Lighting & Mood: Dramatic, high-contrast lighting. Bright beams of sunlight cut through the dusty, shadowy alleyways of the souk, illuminating the person and the goods. The mood is adventurous, sensory, and exotic.
Camera & Technique: Shot with a Sony A7R V with a 50mm f/1.2 G-Master lens. The wide aperture beautifully isolates the subject from the visually dense background, creating a cinematic depth.
Quality: 8K, hyper-detailed, with a rich, warm, and earthy color grade. Focus captures the intense concentration on the person's face and the texture of the artisan product in their hands.`
    },
    {
        id: 'havana',
        name: 'Havana',
        country: 'Küba',
        imageUrl: 'https://picsum.photos/seed/havana/400/300',
        loadingMessage: 'Havana\'da zaman yolculuğu başlıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a retro-style outfit (e.g., a simple Guayabera shirt), leaning casually against a perfectly maintained, brightly colored 1950s classic American car.
Scene Details: The car is parked on a cobblestone street lined with colorful, decaying colonial buildings. The vibrant peeling paint of the buildings adds to the authentic atmosphere.
Lighting & Mood: The harsh, bright light of the Caribbean midday sun creates strong shadows and highly saturated colors. The mood is nostalgic, cool, and captures a moment frozen in time.
Camera & Technique: Shot with a Ricoh GR IIIx (40mm equivalent), famous for its high-contrast, film-like street photography look. A "bleach bypass" style color grading is applied to enhance contrast and desaturate shadows.
Quality: 8K, hyper-detailed, with a gritty, high-contrast aesthetic. Focus is sharp on the person and the chrome details of the vintage car.`
    },
    {
        id: 'london',
        name: 'Londra',
        country: 'İngiltere',
        imageUrl: 'https://picsum.photos/seed/london/400/300',
        loadingMessage: 'Londra\'nın sisli akşamında bir yürüyüş...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a sophisticated person in a classic tailored peacoat, walking across Westminster Bridge on a moody, overcast evening.
Scene Details: The iconic Houses of Parliament and the glowing face of Big Ben are visible through a light evening mist in the background. The red of a double-decker bus is blurred as it passes by.
Lighting & Mood: The cool, blue light of twilight mixed with the warm, artificial glow of old-fashioned streetlamps. The light reflects off the wet pavement of the bridge. The mood is thoughtful, timeless, and quintessentially British.
Camera & Technique: Shot with a Canon EOS 1DX Mark III with a 70-200mm f/2.8 lens from a distance, compressing the background and making Big Ben appear larger and more imposing.
Quality: 8K, hyper-detailed, with a cool, cinematic color palette. A slight film grain is added. Focus tracks the person's determined walk.`
    },
    {
        id: 'sydney',
        name: 'Sydney',
        country: 'Avustralya',
        imageUrl: 'https://picsum.photos/seed/sydney/400/300',
        loadingMessage: 'Sydney limanında kahve keyfi yapılıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a relaxed person in stylish, smart-casual summer attire, enjoying a flat white coffee at an outdoor cafe at Circular Quay.
Scene Details: The iconic sails of the Sydney Opera House are perfectly framed and softly blurred in the background, glistening in the morning sun. The turquoise water of the harbor and a passing ferry complete the scene.
Lighting & Mood: Bright, clear, and crisp morning sunlight. The light is clean and energizing. The mood is vibrant, modern, and laid-back.
Camera & Technique: Shot with an iPhone 16 Pro's main camera in portrait mode to simulate a professional look with advanced computational bokeh. This gives a modern, "shot-on-iPhone" high-end feel.
Quality: 8K, hyper-detailed, with a clean, bright, and slightly saturated color grade. Focus is on the person's happy expression and the latte art in their coffee cup.`
    },
    {
        id: 'cairo',
        name: 'Kahire',
        country: 'Mısır',
        imageUrl: 'https://picsum.photos/seed/cairo/400/300',
        loadingMessage: 'Piramitlerin büyüsü sizi çağırıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person wrapped in a light linen scarf to protect from the sun, standing on a sand dune, looking out towards the Great Pyramids of Giza at sunrise.
Scene Details: The three main pyramids stand majestically on the horizon. The Sphinx is partially visible. The scene is vast and epic. A few camels and their riders might be seen as small silhouettes in the far distance.
Lighting & Mood: The ethereal, hazy light of a desert sunrise. The sun is just cresting the horizon, casting a warm, golden glow and creating long shadows across the sand. The mood is awe-inspiring, ancient, and epic.
Camera & Technique: Shot with a wide-angle 24mm f/2.8 lens to emphasize the vastness of the desert and the scale of the pyramids. The person is framed using the rule of thirds to enhance the composition.
Quality: 8K, hyper-detailed, with a warm, golden, and slightly desaturated color palette to give a sense of heat and age. Focus is on the person's silhouette and their expression of wonder.`
    },
    {
        id: 'dublin',
        name: 'Dublin',
        country: 'İrlanda',
        imageUrl: 'https://picsum.photos/seed/dublin/400/300',
        loadingMessage: 'Dublin\'de sıcak bir pub akşamı yaşanıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a contemplative look, wearing a warm Aran knit sweater, sitting in a cozy, dimly lit traditional Irish pub.
Scene Details: The pub has a dark wood interior with a flickering fireplace. The person holds a pint of stout, with condensation on the glass. In the soft-focus background, musicians are playing traditional Irish music.
Lighting & Mood: The lighting is a warm, intimate glow from the fireplace and low-hanging lamps. The mood is cozy, soulful, and authentic.
Camera & Technique: Shot on a Sony A7S III with a 35mm f/1.4 lens to capture the low-light ambiance. The shallow depth of field keeps the focus on the person, while blurring the lively background.
Quality: 8K, hyper-detailed, with a rich, warm color grade. Sharp focus on the texture of the knit sweater and the condensation on the pint glass.`
    },
    {
        id: 'edinburgh',
        name: 'Edinburgh',
        country: 'İskoçya',
        imageUrl: 'https://picsum.photos/seed/edinburgh/400/300',
        loadingMessage: 'Edinburgh\'un tarihi manzarası kaydediliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person wrapped in a classic tartan scarf, standing atop a windswept Calton Hill at sunrise, looking out over the historic city skyline.
Scene Details: The ancient silhouettes of Edinburgh Castle and the Dugald Stewart Monument are visible. A light morning mist clings to the valleys of the city below.
Lighting & Mood: Dramatic Scottish sunrise, with low, golden light breaking through heavy clouds. The mood is epic, historic, and windswept.
Camera & Technique: Shot with a Fujifilm GFX 100S and a wide-angle 32-64mm f/4 lens to capture the vastness of the landscape. The person is positioned off-center for a powerful composition.
Quality: 8K, hyper-detailed, professional color grading with moody contrast. Focus is sharp on the person's profile against the sky and the rich texture of the tartan scarf.`
    },
    {
        id: 'lisbon',
        name: 'Lizbon',
        country: 'Portekiz',
        imageUrl: 'https://picsum.photos/seed/lisbon/400/300',
        loadingMessage: 'Lizbon\'un sarı tramvayında nostaljik bir an...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a cheerful expression, peeking out of the open wooden-framed window of the famous vintage yellow Tram 28.
Scene Details: The colorful, tiled buildings of the Alfama district rush by in a beautiful motion blur. The narrow, cobblestone street is visible below.
Lighting & Mood: Bright, sunny afternoon light casts strong, geometric shadows. The mood is vibrant, nostalgic, and full of joyful discovery.
Camera & Technique: Shot with a Fuji X100V, using a slightly slow shutter speed (e.g., 1/60s) to create intentional motion blur in the background while keeping the person's face sharp.
Quality: 8K, hyper-detailed, with a vibrant, slightly faded color grade reminiscent of vintage film. Focus is locked on the person's smiling eyes.`
    },
    {
        id: 'berlin',
        name: 'Berlin',
        country: 'Almanya',
        imageUrl: 'https://picsum.photos/seed/berlin/400/300',
        loadingMessage: 'Berlin\'de sokak sanatı ve tarih iç içe geçiyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in an edgy, urban-style outfit (like a bomber jacket and boots), standing in front of a section of the East Side Gallery (the Berlin Wall).
Scene Details: The background is a vibrant, powerful mural painted on the concrete wall. The Spree river is visible behind the wall. The overall setting is a mix of gritty history and modern art.
Lighting & Mood: Overcast, diffused daylight, which makes the colors of the murals pop without harsh shadows. The mood is thoughtful, cool, and contemporary.
Camera & Technique: Shot with a Ricoh GR III, known for its superb street photography capabilities. A wide 28mm equivalent lens captures the person and the scale of the artwork.
Quality: 8K, hyper-detailed, with a high-contrast, slightly desaturated color grade. Focus is sharp on the person's serious or contemplative expression.`
    },
    {
        id: 'vienna',
        name: 'Viyana',
        country: 'Avusturya',
        imageUrl: 'https://picsum.photos/seed/vienna/400/300',
        loadingMessage: 'Viyana kahve evinde imparatorluk zarafeti...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a sophisticated person in a smart, tailored coat, sitting at a small marble table in a grand, historic Viennese coffee house.
Scene Details: The interior is opulent, with high ceilings, crystal chandeliers, and red velvet seating. The person is enjoying a slice of Sachertorte with a coffee. A newspaper lies on the table.
Lighting & Mood: Soft, elegant light filtering through large, ornate windows. The mood is classical, intellectual, and calmly luxurious.
Camera & Technique: Shot on a Canon EOS R5 with a 50mm f/1.2 lens. The extremely shallow depth of field creates a dreamy, painterly background, isolating the person in their elegant surroundings.
Quality: 8K, hyper-detailed, with a warm, rich color palette emphasizing golds and deep reds. Focus is on the person's graceful posture and the texture of the chocolate cake.`
    },
    {
        id: 'florence',
        name: 'Floransa',
        country: 'İtalya',
        imageUrl: 'https://picsum.photos/seed/florence/400/300',
        loadingMessage: 'Floransa\'da bir Rönesans rüyası görülüyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with an artistic air, wearing a flowing linen shirt, standing on the Ponte Vecchio bridge at golden hour, looking out over the Arno River.
Scene Details: The historic buildings lining the river are bathed in warm light. The famous dome of the Florence Cathedral (Duomo) is visible in the distance.
Lighting & Mood: Warm, golden Tuscan sunlight. The light is soft and romantic, creating a painterly effect. The mood is artistic, timeless, and deeply romantic.
Camera & Technique: Shot on a Leica Q2 with its fixed 28mm f/1.7 lens. The composition frames the person against the classic Florentine cityscape.
Quality: 8K, hyper-detailed, with a color grade that mimics the warm tones of Renaissance paintings. Focus is on the person's thoughtful gaze into the distance.`
    },
    {
        id: 'seoul',
        name: 'Seul',
        country: 'Güney Kore',
        imageUrl: 'https://picsum.photos/seed/seoul/400/300',
        loadingMessage: 'Seul\'de gelenek ve modernite buluşuyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a fashion-forward person wearing a modern interpretation of a Hanbok (or a sleek, modern outfit), standing in the courtyard of the historic Gyeongbokgung Palace.
Scene Details: The intricate, colorful patterns of the traditional palace architecture are in the background. In the far distance, the modern skyscrapers of Seoul create a stunning contrast.
Lighting & Mood: Clear, crisp late afternoon light. The low sun highlights the textures of the palace wood and the person's outfit. The mood is a respectful and beautiful blend of ancient tradition and hyper-modernity.
Camera & Technique: Shot on a Sony A1 with an 85mm f/1.4 G-Master lens, compressing the background to bring the distant skyscrapers closer and create a dramatic juxtaposition.
Quality: 8K, hyper-detailed, with a clean, vibrant color palette. Focus is on the person's confident expression and the details of their clothing.`
    },
    {
        id: 'bangkok',
        name: 'Bangkok',
        country: 'Tayland',
        imageUrl: 'https://picsum.photos/seed/bangkok/400/300',
        loadingMessage: 'Bangkok\'un yüzen çarşısında bir macera...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a light, casual outfit, sitting in a traditional long-tail boat, buying fresh fruit from a vendor in another boat at the Damnoen Saduak Floating Market.
Scene Details: The canal is crowded with small boats piled high with colorful tropical fruits, vegetables, and food being cooked on the spot. The scene is chaotic, vibrant, and full of life.
Lighting & Mood: Hazy, humid morning light, diffused by the awnings of the boats and market stalls. The mood is bustling, authentic, and sensory.
Camera & Technique: Shot with a GoPro Hero 12 in a cinematic setting to capture a wide, immersive point-of-view feel, as if the viewer is right there in the boat.
Quality: 8K, hyper-detailed, with a highly saturated color grade to emphasize the colors of the market. Focus is on the interaction between the person and the vendor.`
    },
    {
        id: 'singapore',
        name: 'Singapur',
        country: 'Singapur',
        imageUrl: 'https://picsum.photos/seed/singapore/400/300',
        loadingMessage: 'Singapur\'da geleceğin bahçesi keşfediliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in sleek, contemporary clothing, standing on the OCBC Skyway bridge amidst the giant Supertree Grove at Gardens by the Bay at night.
Scene Details: The massive, illuminated Supertrees create a surreal, Avatar-like forest of light. The glowing domes of the conservatories and the Marina Bay Sands hotel are visible in the background.
Lighting & Mood: The scene is lit by the multi-colored, futuristic glow of the Supertrees. The mood is magical, futuristic, and awe-inspiring.
Camera & Technique: Shot with a Nikon Z8 with a wide 14-24mm f/2.8 lens to capture the immense scale of the structures. A tripod is used for a long exposure to make the lights smooth and vibrant.
Quality: 8K, hyper-detailed, with a cool color palette of blues, purples, and greens. Focus is on the person's silhouette and expression of wonder against the glowing backdrop.`
    },
    {
        id: 'mumbai',
        name: 'Mumbai',
        country: 'Hindistan',
        imageUrl: 'https://picsum.photos/seed/mumbai/400/300',
        loadingMessage: 'Mumbai\'de bir muson melankolisi...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person holding a simple black umbrella, standing on the promenade at Marine Drive during a light monsoon rain.
Scene Details: The iconic art-deco buildings line the road in the background. The gray Arabian Sea is choppy, and the city lights are starting to reflect on the wet pavement.
Lighting & Mood: The soft, gray, diffused light of an overcast, rainy evening. The mood is cinematic, romantic, and deeply melancholic, in the style of a Bollywood film.
Camera & Technique: Shot with an ARRI Alexa cinema camera with an anamorphic lens to create the classic widescreen cinematic look with distinctive bokeh and lens flares from the car headlights.
Quality: 8K, cinematic aspect ratio (2.39:1), hyper-detailed, with a moody, desaturated color grade. Focus is on the droplets of rain on the umbrella and the person's pensive face.`
    },
    {
        id: 'sanfrancisco',
        name: 'San Francisco',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/sanfrancisco/400/300',
        loadingMessage: 'Sisli köprü manzarası ölümsüzleştiriliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a warm, casual jacket, standing at the Battery Spencer viewpoint, looking at the Golden Gate Bridge.
Scene Details: The iconic bridge is partially shrouded in the famous San Francisco fog, with only the tops of the towers visible. The rocky coastline and the Pacific Ocean are below.
Lighting & Mood: Cool, soft light of an early foggy morning. The mood is dramatic, mysterious, and iconic.
Camera & Technique: Shot on a telephoto lens (e.g., 100-400mm) to compress the distance and make the partially visible bridge look immense behind the person.
Quality: 8K, hyper-detailed, with a cool, blue and orange color grade. Focus is on the person's profile as they gaze at the majestic, fog-covered landmark.`
    },
    {
        id: 'neworleans',
        name: 'New Orleans',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/neworleans/400/300',
        loadingMessage: 'New Orleans\'ta bir caz gecesi...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a slight smile, leaning against an old brick wall in the French Quarter, as a street jazz band plays in the softly blurred background.
Scene Details: The scene is on a historic street with gas lamps and intricate wrought-iron balconies. The brass instruments of the musicians (a saxophone, a trumpet) glint under the streetlights.
Lighting & Mood: The warm, atmospheric glow from gas lamps and the open doorways of nearby bars. The mood is soulful, lively, and effortlessly cool.
Camera & Technique: Shot on a Leica M11 with a fast 35mm f/1.4 lens to capture the scene with available light. A fine film grain is added to enhance the timeless, analogue feel.
Quality: 8K, hyper-detailed, with a warm, high-contrast black and white conversion. Focus is on the person's relaxed expression, capturing the moment they are lost in the music.`
    },
    {
        id: 'mexicocity',
        name: 'Mexico City',
        country: 'Meksika',
        imageUrl: 'https://picsum.photos/seed/mexicocity/400/300',
        loadingMessage: 'Frida\'dan ilhamla renkli bir an...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), an artistic person wearing clothes with vibrant, traditional Mexican embroidery, standing against the iconic cobalt blue wall of the Frida Kahlo Museum (Casa Azul).
Scene Details: Lush tropical plants and terracotta pots are visible in the courtyard setting. The intense blue of the wall dominates the frame.
Lighting & Mood: Bright but soft light, filtered through the leaves of the courtyard trees. The mood is creative, vibrant, and deeply cultural.
Camera & Technique: Shot on a Phase One medium format camera to capture extreme detail and color fidelity. A 50mm equivalent lens provides a natural, pleasing perspective.
Quality: 8K, hyper-detailed, with an extremely rich and saturated color grade, especially the blues and reds. Focus is on the person's proud and artistic gaze.`
    },
    {
        id: 'buenosaires',
        name: 'Buenos Aires',
        country: 'Arjantin',
        imageUrl: 'https://picsum.photos/seed/buenosaires/400/300',
        loadingMessage: 'Buenos Aires\'te tango tutkusu yaşanıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a passionate and intense expression, captured in a dramatic pose of the Tango, dancing with a blurred partner on a cobblestone street in the La Boca neighborhood.
Scene Details: The background is the colorful, corrugated metal houses of the Caminito street. The scene is set at night.
Lighting & Mood: A single, dramatic spotlight from a streetlamp illuminates the dancers, creating high contrast and deep shadows. The mood is passionate, dramatic, and full of motion.
Camera & Technique: Shot with a wide-angle lens from a low angle to make the dancers look powerful and dynamic. A slow shutter sync flash technique is used to freeze the person's face while creating artistic motion blur in their limbs and clothing.
Quality: 8K, hyper-detailed, with a warm, high-contrast color grade. Focus is critically sharp on the person's intense eyes.`
    },
    {
        id: 'cusco',
        name: 'Cusco',
        country: 'Peru',
        imageUrl: 'https://picsum.photos/seed/cusco/400/300',
        loadingMessage: 'And Dağları\'nın mirası keşfediliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a respectful expression, wearing a warm alpaca wool sweater, standing in the historic Plaza de Armas.
Scene Details: The background features the stunning colonial architecture built on top of ancient Inca stone walls. The massive Andes mountains loom over the city in the distance. A llama, adorned with colorful tassels, might be standing nearby.
Lighting & Mood: The thin, clear light of a high-altitude sunny day. The sky is a deep, cloudless blue. The mood is historic, spiritual, and grounded.
Camera & Technique: Shot with a wide-angle lens (e.g., 24mm) to capture the person, the plaza, and the mountains in one epic frame. A polarizing filter is used to deepen the blue of the sky.
Quality: 8K, hyper-detailed, with a natural, earthy color palette. Focus is on the person's connection with the ancient surroundings.`
    },
    {
        id: 'capetown',
        name: 'Cape Town',
        country: 'Güney Afrika',
        imageUrl: 'https://picsum.photos/seed/capetown/400/300',
        loadingMessage: 'Dünyanın ucunda nefes kesen bir manzara...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in comfortable hiking gear, standing on the edge of a cliff at Cape Point, with the dramatic meeting of the Atlantic and Indian Oceans in the background.
Scene Details: The iconic lighthouse is visible on a distant peak. The ocean is a turbulent, deep blue, crashing against the rugged cliffs below.
Lighting & Mood: Bright, windy, late afternoon. The sun is low, creating a golden shimmer on the ocean's surface. The mood is adventurous, wild, and awe-inspiring.
Camera & Technique: Shot on a drone (DJI Mavic 3 Pro) from a slightly elevated and distant perspective, showcasing the person against the vast, epic scale of the landscape.
Quality: 8K, hyper-detailed, with a high-contrast, natural color grade that emphasizes the power of nature. Focus is on the solitary figure of the person amidst the grand scenery.`
    },
    {
        id: 'queenstown',
        name: 'Queenstown',
        country: 'Yeni Zelanda',
        imageUrl: 'https://picsum.photos/seed/queenstown/400/300',
        loadingMessage: 'Queenstown\'da macera ruhu zirvede...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with an exhilarating smile, sitting on the edge of a helicopter that has just landed on a snow-capped peak of The Remarkables mountain range.
Scene Details: A breathtaking panoramic view of pristine snow, jagged mountain peaks, and the deep blue Lake Wakatipu far below. The helicopter's rotor blades are slightly blurred.
Lighting & Mood: Intense, crisp, high-altitude sunlight reflecting off the snow. The mood is thrilling, adventurous, and absolutely epic.
Camera & Technique: Shot with an ultra-wide-angle lens (e.g., 16mm) from inside the helicopter, looking out at the person to capture the height and the vastness of the view.
Quality: 8K, hyper-detailed, with a cool, high-contrast color grade. A slight lens flare adds to the drama. Focus is on the person's joyful and fearless expression.`
    },
    {
        id: 'stockholm',
        name: 'Stockholm',
        country: 'İsveç',
        imageUrl: 'https://picsum.photos/seed/stockholm/400/300',
        loadingMessage: 'Stockholm\'da karlı bir akşam yürüyüşü...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a stylish, minimalist Scandinavian coat, walking down a narrow, cobblestone alley in Gamla Stan (The Old Town) during a gentle snowfall.
Scene Details: The buildings are painted in warm shades of yellow and red. Old-fashioned gas lamps cast a warm glow on the falling snow.
Lighting & Mood: The magical light of a winter evening ('blue hour'). The ambient blue light is mixed with the warm yellow glow of streetlights and windows. The mood is cozy, magical, and enchanting.
Camera & Technique: Shot with a fast prime lens (e.g., 50mm f/1.2) with a wide aperture to create a beautiful bokeh from the distant lights and to capture the individual snowflakes as soft orbs of light.
Quality: 8K, hyper-detailed, with a soft, cinematic color grade. Focus is on the person's peaceful expression as they enjoy the quiet winter moment.`
    },
    {
        id: 'hochiminh',
        name: 'Ho Chi Minh City',
        country: 'Vietnam',
        imageUrl: 'https://picsum.photos/seed/hochiminh/400/300',
        loadingMessage: 'Ho Chi Minh City\'nin ritmi yakalanıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person wearing a traditional conical hat (Nón Lá) and a light shirt, expertly navigating a street food market on a vintage scooter.
Scene Details: The background is a vibrant blur of motion: countless other scooters, street food stalls with steaming woks, and colorful signs. The person is carrying a basket of fresh herbs or flowers.
Lighting & Mood: Humid late afternoon light, with shafts of sun cutting through the bustling market awnings. The mood is energetic, authentic, and captures the chaotic rhythm of the city.
Camera & Technique: Panning shot with a slightly slower shutter speed to create motion blur in the background, while keeping the person and their scooter relatively sharp.
Quality: 8K, hyper-detailed, with a warm, gritty, and saturated color grade. Focus is locked on the person's calm and focused expression in the midst of the chaos.`
    },
    {
        id: 'jerusalem',
        name: 'Kudüs',
        country: '',
        imageUrl: 'https://picsum.photos/seed/jerusalem/400/300',
        loadingMessage: 'Kudüs\'ün kadim duvarları arasında...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a deeply reverent expression, standing in a quiet alleyway of the Old City, with the ancient, golden stones of the Western Wall visible in the background.
Scene Details: The scene is framed by ancient stone archways. The light catches the texture and age of the stones. In the distance, the Dome of the Rock might be partially visible.
Lighting & Mood: The very first light of dawn ('golden hour'), casting a warm, divine glow on the Jerusalem stone. The mood is spiritual, timeless, and profoundly peaceful.
Camera & Technique: Shot on a full-frame camera with a 35mm lens to provide a natural, documentary-style perspective. The composition is quiet and respectful.
Quality: 8K, hyper-detailed, with a warm, low-contrast color grade that emphasizes the golden tones of the stone. Focus is on the person's emotional and spiritual connection to the place.`
    },
    {
        id: 'moscow',
        name: 'Moskova',
        country: 'Rusya',
        imageUrl: 'https://picsum.photos/seed/moscow/400/300',
        loadingMessage: 'Moskova\'da kış masalı yaşanıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a stylish, warm fur hat and elegant wool coat, standing in the Red Square during a light snowfall at dusk.
Scene Details: The iconic, brightly colored domes of St. Basil's Cathedral are illuminated and softly blurred in the background. The Kremlin walls and the GUM department store, adorned with festive lights, complete the scene.
Lighting & Mood: 'Blue hour' lighting, creating a deep blue sky that contrasts with the warm, golden glow from the architectural illuminations and streetlights. The mood is magical, historic, and wonderfully wintry.
Camera & Technique: Shot on a Sony A7R IV with a 50mm f/1.2 G-Master lens. The wide aperture captures the falling snowflakes as beautiful bokeh and isolates the person from the background.
Quality: 8K, hyper-detailed, professional color grading with rich colors. Tack-sharp focus on the person's serene expression against the iconic backdrop.`
    },
    {
        id: 'beijing',
        name: 'Pekin',
        country: 'Çin',
        imageUrl: 'https://picsum.photos/seed/beijing/400/300',
        loadingMessage: 'Yasak Şehir\'in gizemleri çözülüyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a respectful and thoughtful expression, wearing a modern, elegant outfit with a hint of red, standing in a vast, empty courtyard within the Forbidden City.
Scene Details: The immense, symmetrical imperial architecture with its iconic yellow-tiled roofs stretches into the background. Intricate details of the ancient wooden structures are visible.
Lighting & Mood: Soft, hazy morning light filtering through a light mist, giving the scene a timeless, painterly quality. The mood is grand, serene, and deeply historic.
Camera & Technique: Shot with a medium format Fujifilm GFX 100S and a wide 32-64mm lens to capture the grand scale and symmetry of the palace. The composition is minimalist and powerful.
Quality: 8K, hyper-detailed, professional color grading with an emphasis on the reds and golds of the imperial palace. Focus is on the person's contemplative gaze.`
    },
    {
        id: 'dubai',
        name: 'Dubai',
        country: 'BAE',
        imageUrl: 'https://picsum.photos/seed/dubai/400/300',
        loadingMessage: 'Dubai\'nin zirvesinde bir an...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a confident person in luxurious, modern attire, standing on a high-rise balcony at night, overlooking the glittering Dubai skyline.
Scene Details: The magnificent, illuminated Burj Khalifa pierces the sky in the background. The Dubai Fountain's water show is captured mid-display below, and the sprawling city lights create a vibrant bokeh.
Lighting & Mood: The scene is lit by the city's dazzling artificial lights, creating a high-contrast, glamorous aesthetic. The mood is ambitious, luxurious, and ultra-modern.
Camera & Technique: Shot on a Canon EOS R5 with a 24-70mm f/2.8 lens. A slightly longer exposure captures the light trails of the city traffic below.
Quality: 8K, hyper-detailed, with a clean, sharp, and vibrant color grade. Focus is on the person's powerful silhouette and determined expression.`
    },
    {
        id: 'agra',
        name: 'Agra',
        country: 'Hindistan',
        imageUrl: 'https://picsum.photos/seed/agra/400/300',
        loadingMessage: 'Tac Mahal\'in önünde ölümsüz bir an...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in elegant, light-colored traditional Indian attire, standing by the reflecting pool leading to the Taj Mahal at sunrise.
Scene Details: The iconic white marble mausoleum is perfectly reflected in the calm water. A soft mist hangs in the air, giving the scene an ethereal quality. The gardens are empty and peaceful.
Lighting & Mood: The soft, warm, golden light of dawn. The sky is a palette of soft pinks, oranges, and purples. The mood is serene, romantic, and breathtakingly beautiful.
Camera & Technique: Shot with a Nikon Z9 and a 24-120mm f/4 lens, perfectly composing the shot for symmetry. A polarizing filter enhances the reflection in the water.
Quality: 8K, hyper-detailed, with a soft, dreamy color palette. Focus is on the person's expression of awe and the intricate details of their clothing.`
    },
    {
        id: 'athens',
        name: 'Atina',
        country: 'Yunanistan',
        imageUrl: 'https://picsum.photos/seed/athens/400/300',
        loadingMessage: 'Akropolis\'te tanrılara selam veriliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person wearing a simple, white linen outfit, standing on the hill of the Acropolis at golden hour, with the Parthenon in the background.
Scene Details: The ancient marble columns of the Parthenon are bathed in warm light. The sprawling city of Athens is visible below, stretching to the sea.
Lighting & Mood: Warm, dramatic sunset light. The low sun creates long shadows and highlights the texture of the ancient ruins. The mood is historic, epic, and contemplative.
Camera & Technique: Shot on a Sony A7R V with a 35mm f/1.4 lens. The composition uses the rule of thirds, placing the person looking towards the ancient temple. A subtle lens flare is visible.
Quality: 8K, hyper-detailed, with a warm, golden color grade. Focus is on the person's thoughtful profile against the magnificent historical backdrop.`
    },
    {
        id: 'budapest',
        name: 'Budapeşte',
        country: 'Macaristan',
        imageUrl: 'https://picsum.photos/seed/budapest/400/300',
        loadingMessage: 'Tuna\'nın incisi Budapeşte\'de bir akşam...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a sophisticated person in a stylish trench coat, standing on the Fisherman's Bastion at blue hour, looking across the Danube River.
Scene Details: The magnificent, illuminated Hungarian Parliament Building is prominently featured in the background. The Chain Bridge is also lit up, and river cruise boats create light trails on the water.
Lighting & Mood: The deep blue of the twilight sky is perfectly contrasted by the warm, golden lights of the city's architecture. The mood is romantic, grand, and slightly melancholic.
Camera & Technique: Shot on a tripod with a Canon EOS R6 Mark II and a 70-200mm f/2.8 lens to compress the background and make the Parliament building appear closer and more majestic. A long exposure smooths the water.
Quality: 8K, hyper-detailed, professional color grading with deep blues and brilliant golds. Focus is on the person's elegant silhouette and pensive expression.`
    },
    {
        id: 'copenhagen',
        name: 'Kopenhag',
        country: 'Danimarka',
        imageUrl: 'https://picsum.photos/seed/copenhagen/400/300',
        loadingMessage: 'Nyhavn\'da renkli bir mola...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a cozy and cheerful look, wearing a stylish Scandinavian sweater, sitting at an outdoor cafe in the Nyhavn harbor.
Scene Details: The iconic, brightly colored 17th-century townhouses line the canal in the background. Old wooden ships are moored in the water.
Lighting & Mood: Soft, crisp afternoon light. The sun is low, casting a gentle, warm glow on the colorful facades. The mood is happy, relaxed, and quintessentially Danish ('hygge').
Camera & Technique: Shot with a Fujifilm X-T5 with a 33mm f/1.4 lens. The camera's film simulation is used to create a pleasing, slightly nostalgic color palette. Shallow depth of field blurs the bustling background.
Quality: 8K, hyper-detailed, with a natural and vibrant color grade. Focus is on the person's warm smile and the texture of their coffee cup.`
    },
    {
        id: 'reykjavik',
        name: 'Reykjavik',
        country: 'İzlanda',
        imageUrl: 'https://picsum.photos/seed/reykjavik/400/300',
        loadingMessage: 'Kuzey Işıkları altında bir rüya...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person filled with wonder, dressed in a heavy-duty parka, standing on a dark, snow-covered volcanic landscape just outside the city.
Scene Details: The incredible, ethereal green and purple lights of the Aurora Borealis dance across the star-filled sky. In the distance, the faint glow of Reykjavik is visible.
Lighting & Mood: The only light source is the magical, otherworldly glow of the Northern Lights and the stars. The mood is awe-inspiring, spiritual, and unforgettable.
Camera & Technique: Shot on a Sony A7S III (for low-light) with a very wide and fast 14mm f/1.8 lens. A long exposure is used to capture the detail in the aurora, while a brief, soft flash illuminates the person's face.
Quality: 8K, hyper-detailed, with clean, noise-free colors in the night sky. Focus is tack-sharp on the person's amazed expression.`
    },
    {
        id: 'zermatt',
        name: 'Zermatt',
        country: 'İsviçre',
        imageUrl: 'https://picsum.photos/seed/zermatt/400/300',
        loadingMessage: 'Matterhorn\'un gölgesinde bir an...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in high-end ski gear, holding a cup of hot chocolate, relaxing on the terrace of a mountain chalet.
Scene Details: The iconic, pyramid-shaped Matterhorn peak dominates the background, sharp against a brilliant blue sky. Pristine, sun-drenched ski slopes stretch out below.
Lighting & Mood: Bright, intense, high-altitude sunlight. The light reflects off the snow, creating a clean, crisp atmosphere. The mood is exhilarating, luxurious, and serene.
Camera & Technique: Shot on a Hasselblad X2D medium format camera with an XCD 90mm f/2.5 lens. A polarizing filter is used to create a deep blue sky and manage reflections from the snow.
Quality: 8K, hyper-detailed, with a high-contrast, vibrant color grade. Focus is on the person's relaxed smile and the steam rising from their cup.`
    },
    {
        id: 'seville',
        name: 'Sevilla',
        country: 'İspanya',
        imageUrl: 'https://picsum.photos/seed/seville/400/300',
        loadingMessage: 'Sevilla\'da flamenko ateşi yanıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a passionate expression, clapping their hands to the rhythm of music in a rustic, atmospheric flamenco 'tablao'.
Scene Details: The person is sitting at a small wooden table. In the softly blurred background, a flamenco dancer in a vibrant red dress is captured in a dynamic pose. The walls are adorned with traditional Spanish shawls and photos.
Lighting & Mood: Dramatic, high-contrast lighting from a single, warm spotlight on the stage. The mood is passionate, intense, and deeply cultural.
Camera & Technique: Shot with a fast 85mm f/1.4 lens to isolate the person and capture the low-light ambiance. The focus is on the person's face, with the dancer creating a beautiful, colorful bokeh.
Quality: 8K, hyper-detailed, with a warm, gritty, and high-contrast color grade. Focus captures the emotion in the person's eyes.`
    },
    {
        id: 'vancouver',
        name: 'Vancouver',
        country: 'Kanada',
        imageUrl: 'https://picsum.photos/seed/vancouver/400/300',
        loadingMessage: 'Vancouver\'da doğa ve şehir buluşuyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in stylish outdoor gear, standing on the Capilano Suspension Bridge, with a lush, green rainforest canyon below.
Scene Details: The vast temperate rainforest with towering fir and cedar trees surrounds the scene. A light mist rises from the canyon floor, adding to the atmosphere.
Lighting & Mood: Soft, diffused overcast light, which is perfect for bringing out the rich green tones of the forest. The mood is adventurous, peaceful, and connected to nature.
Camera & Technique: Shot with a wide-angle 24mm f/1.8 lens to capture the scale of the bridge and the forest, while keeping the person as the main subject. The shallow depth of field slightly blurs the distant parts of the bridge.
Quality: 8K, hyper-detailed, professional color grading with an emphasis on deep greens and earthy browns. Focus is on the person's happy and slightly thrilled expression.`
    },
    {
        id: 'chicago',
        name: 'Chicago',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/chicago/400/300',
        loadingMessage: 'Chicago\'nun yansımasında kendinizi görün...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a curious smile, touching the surface of the 'Cloud Gate' sculpture (The Bean) in Millennium Park.
Scene Details: The iconic Chicago skyline, with its famous skyscrapers, is visible in the distorted, fun-house-like reflection on the sculpture's mirrored surface.
Lighting & Mood: Bright, clear afternoon light. The sun glints off the polished steel of the sculpture. The mood is playful, artistic, and urban.
Camera & Technique: Shot with a 35mm lens, getting close to the subject to capture their interaction with the sculpture and the detailed reflection.
Quality: 8K, hyper-detailed, with a clean, high-contrast, and slightly cool color grade. Focus is sharp on both the person's face and their reflection.`
    },
    {
        id: 'bali',
        name: 'Bali',
        country: 'Endonezya',
        imageUrl: 'https://picsum.photos/seed/bali/400/300',
        loadingMessage: 'Bali\'nin pirinç teraslarında huzur...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a serene person wearing light, comfortable yoga attire, practicing a simple meditation pose on the edge of the Tegallalang Rice Terraces.
Scene Details: The stunning, emerald-green rice paddies cascade down the valley in intricate patterns. A few palm trees dot the landscape.
Lighting & Mood: Soft, warm morning light. The 'golden hour' after sunrise casts a beautiful glow over the landscape. The mood is tranquil, spiritual, and deeply connected to nature.
Camera & Technique: Shot with a drone (DJI Mavic 3) from a low, sweeping angle to showcase the vastness of the terraces while keeping the person as the central focus.
Quality: 8K, hyper-detailed, with a vibrant, lush green color palette. Focus is on the person's peaceful expression and calm posture.`
    },
    {
        id: 'kualalumpur',
        name: 'Kuala Lumpur',
        country: 'Malezya',
        imageUrl: 'https://picsum.photos/seed/kualalumpur/400/300',
        loadingMessage: 'Petronas Kuleleri\'nin ışıltısı...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with an impressed look, standing in the KLCC Park at night, with the illuminated Petronas Twin Towers in the background.
Scene Details: The iconic twin skyscrapers are brilliantly lit, dominating the skyline. The fountains in the park might be active, creating a colorful light show.
Lighting & Mood: The scene is lit by the bright, cool-toned lights of the towers and the warm lights of the park. The mood is modern, impressive, and vibrant.
Camera & Technique: Shot from a low angle with an ultra-wide 16mm lens to make the towers look even more massive and imposing. A tripod is used for a sharp, clean night shot.
Quality: 8K, hyper-detailed, with a cool, futuristic color grade. Focus is on the person's upward gaze of admiration.`
    },
    {
        id: 'hanoi',
        name: 'Hanoi',
        country: 'Vietnam',
        imageUrl: 'https://picsum.photos/seed/hanoi/400/300',
        loadingMessage: 'Hanoi\'nin tarihi sokaklarında bir gezinti...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a curious expression, sitting on a small plastic stool at a street food stall in Hanoi's Old Quarter, enjoying a bowl of phở.
Scene Details: The background is a bustling, narrow street filled with scooters, pedestrians, and colorful signs. The architecture is a mix of French colonial and traditional Vietnamese styles. Steam rises from the bowl of noodles.
Lighting & Mood: Warm, ambient light from the street food stall and surrounding shops in the evening. The mood is authentic, bustling, and sensory.
Camera & Technique: Shot with a fast 50mm f/1.4 lens to isolate the person from the chaotic background. The focus is critically sharp on the person and their food.
Quality: 8K, hyper-detailed, with a warm, gritty, cinematic color grade. Focus captures the intricate details of the meal and the person's engaged expression.`
    },
    {
        id: 'taipei',
        name: 'Taipei',
        country: 'Tayvan',
        imageUrl: 'https://picsum.photos/seed/taipei/400/300',
        loadingMessage: 'Taipei 101\'den şehir manzarası...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a stylish, modern outfit, looking out from the observatory of the Taipei 101 skyscraper at night.
Scene Details: The vast, glittering expanse of Taipei city stretches out below. The person is standing near the window, and their reflection is faintly visible on the glass.
Lighting & Mood: The lighting is a mix of the soft interior lights of the observatory and the millions of city lights from outside. The mood is contemplative, modern, and awe-inspiring.
Camera & Technique: Shot with a wide-angle lens to capture both the person and the grand cityscape. A polarizing filter is used to control reflections on the window.
Quality: 8K, hyper-detailed, with sharp, vibrant city lights. Focus is on the person's thoughtful profile as they gaze upon the city.`
    },
    {
        id: 'hongkong',
        name: 'Hong Kong',
        country: 'Çin',
        imageUrl: 'https://picsum.photos/seed/hongkong/400/300',
        loadingMessage: 'Hong Kong\'un tepe manzarası büyüleyici...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a confident expression, standing at the Victoria Peak viewpoint at dusk, overlooking the world-famous skyline and harbor.
Scene Details: The dense cluster of skyscrapers on Hong Kong Island is illuminated, set against the backdrop of the mountains and the bustling Victoria Harbour, with the iconic Star Ferry crossing the water.
Lighting & Mood: The 'blue hour' provides a stunning contrast between the deep blue sky and the warm, vibrant lights of the city. The mood is dynamic, powerful, and iconic.
Camera & Technique: Shot with a 24-70mm lens to perfectly frame the person against the sprawling cityscape. A tripod and a slight long exposure capture the light trails from the boats in the harbor.
Quality: 8K, hyper-detailed, professional color grading with sharp contrast and vibrant colors. Focus is on the person's commanding presence.`
    },
    {
        id: 'zanzibar',
        name: 'Zanzibar',
        country: 'Tanzanya',
        imageUrl: 'https://picsum.photos/seed/zanzibar/400/300',
        loadingMessage: 'Zanzibar\'ın turkuaz sularında...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a relaxed person in light, white beachwear, wading in the crystal-clear, turquoise waters of a pristine beach in Zanzibar.
Scene Details: A traditional wooden Dhow boat is anchored in the shallow water in the background. The sand is powder-white, and the sky is a brilliant, cloudless blue.
Lighting & Mood: Bright, tropical midday sun. The light sparkles on the water's surface. The mood is blissful, serene, and idyllic.
Camera & Technique: Shot with a drone from a low angle, just above the water, to create an immersive feel. A polarizing filter is used to enhance the incredible colors of the water and sky.
Quality: 8K, hyper-detailed, with a vibrant, high-key color grade. Focus is on the person's happy expression and the transparent water around them.`
    },
    {
        id: 'petra',
        name: 'Petra',
        country: 'Ürdün',
        imageUrl: 'https://picsum.photos/seed/petra/400/300',
        loadingMessage: 'Kayıp şehir Petra\'da bir kaşif...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with an adventurous look, wearing practical explorer-style clothing (linen shirt, hat), standing at the end of the Siq canyon, looking up at the first reveal of The Treasury.
Scene Details: The narrow, high-walled sandstone canyon frames the view of the magnificent, rock-carved facade of Al-Khazneh (The Treasury).
Lighting & Mood: Dramatic, high-contrast lighting. A bright beam of sunlight illuminates The Treasury, while the person and the canyon walls are in shadow. The mood is awe-inspiring, mysterious, and adventurous, like a scene from Indiana Jones.
Camera & Technique: Shot from a low angle with a wide 24mm lens to emphasize the scale of the canyon and the grandeur of The Treasury.
Quality: 8K, hyper-detailed, with a warm, earthy color palette. Focus is on the person's silhouette and their expression of utter amazement.`
    },
    {
        id: 'helsinki',
        name: 'Helsinki',
        country: 'Finlandiya',
        imageUrl: 'https://picsum.photos/seed/helsinki/400/300',
        loadingMessage: 'Helsinki\'de tasarım ve sükunet...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a stylish, minimalist black outfit, sitting inside the Temppeliaukio Church (Rock Church), looking up at the copper-lined dome.
Scene Details: The unique interior of the church, carved directly out of solid rock, surrounds the person. Natural light streams in through the skylight that circles the dome.
Lighting & Mood: Soft, beautiful, natural light from the skylight. The mood is peaceful, contemplative, and architectural.
Camera & Technique: Shot with an ultra-wide 16mm lens to capture the full scope of the incredible architecture. The composition is centered and symmetrical.
Quality: 8K, hyper-detailed, with a cool, clean color grade that emphasizes the textures of the rock and copper. Focus is on the person's serene and thoughtful expression.`
    },
    {
        id: 'oslo',
        name: 'Oslo',
        country: 'Norveç',
        imageUrl: 'https://picsum.photos/seed/oslo/400/300',
        loadingMessage: 'Oslo fiyordunda modern bir gezinti...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in chic, modern Scandinavian attire, standing on the angled roof of the Oslo Opera House, which slopes down to the water.
Scene Details: The minimalist, white marble architecture of the Opera House creates strong leading lines. In the background, the Oslo Fjord is dotted with small islands and boats. Modern sculptures are visible nearby.
Lighting & Mood: Crisp, clear, low afternoon sunlight. The light creates long, soft shadows on the white architecture. The mood is cool, modern, and serene.
Camera & Technique: Shot with a 35mm lens, using a minimalist composition. The clean lines of the building dominate the frame.
Quality: 8K, hyper-detailed, with a clean, slightly desaturated color palette. Focus is on the person's calm, confident posture against the modern backdrop.`
    },
    {
        id: 'munich',
        name: 'Münih',
        country: 'Almanya',
        imageUrl: 'https://picsum.photos/seed/munich/400/300',
        loadingMessage: 'Münih\'te Oktoberfest coşkusu!',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a joyful person wearing traditional Bavarian attire (Lederhosen or a Dirndl), raising a large glass beer stein in a toast inside a bustling Oktoberfest tent.
Scene Details: The background is a lively, happy blur of people, long wooden tables, and the colorful decorations of the beer tent. A traditional brass band is partially visible.
Lighting & Mood: Warm, festive, and slightly hazy light inside the tent. The mood is celebratory, joyful, and full of energy.
Camera & Technique: Shot with a 50mm f/1.8 lens to capture the festive atmosphere with a shallow depth of field, keeping the focus squarely on the person's happy expression.
Quality: 8K, hyper-detailed, with a warm, vibrant color grade. Focus is on the person's smile and the condensation on their beer stein.`
    },
    {
        id: 'bruges',
        name: 'Brugge',
        country: 'Belçika',
        imageUrl: 'https://picsum.photos/seed/bruges/400/300',
        loadingMessage: 'Brugge\'de bir ortaçağ masalı...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a pensive person in a classic wool coat, standing on a historic stone bridge over a canal in Bruges on a misty autumn morning.
Scene Details: The medieval architecture with its stepped gable roofs is reflected in the still water of the canal. A few swans glide by. Golden autumn leaves cling to the ivy on the buildings.
Lighting & Mood: Soft, diffused light from a misty, overcast sky. The mood is romantic, melancholic, and deeply atmospheric, like a painting.
Camera & Technique: Shot with an 85mm portrait lens to create a beautiful separation between the person and the dreamy, fairytale-like background.
Quality: 8K, hyper-detailed, with a desaturated, painterly color grade. Focus is on the person's thoughtful expression.`
    },
    {
        id: 'milan',
        name: 'Milano',
        country: 'İtalya',
        imageUrl: 'https://picsum.photos/seed/milan/400/300',
        loadingMessage: 'Milano\'da moda ve mimari bir arada...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), an exceptionally stylish, fashion-forward person, walking confidently out of the Galleria Vittorio Emanuele II.
Scene Details: The magnificent, ornate architecture of the 19th-century shopping arcade, with its glass-vaulted ceilings and intricate mosaics, is visible behind them. The Piazza del Duomo is in the background, with the famous cathedral partially visible.
Lighting & Mood: Elegant, soft light filtering through the glass roof of the Galleria, mixed with the bright daylight of the piazza. The mood is chic, sophisticated, and luxurious.
Camera & Technique: A classic street-style fashion shot, taken with a 105mm lens from a distance to compress the background and capture the person's full outfit.
Quality: 8K, hyper-detailed, with a clean, high-fashion color grade. Focus is critically sharp on the person and the texture of their high-end clothing.`
    },
    {
        id: 'toronto',
        name: 'Toronto',
        country: 'Kanada',
        imageUrl: 'https://picsum.photos/seed/toronto/400/300',
        loadingMessage: 'Toronto\'da şehrin zirvesinde...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a look of thrill and excitement, harnessed and leaning out from the open-air EdgeWalk on the CN Tower.
Scene Details: The breathtaking, vertigo-inducing view of downtown Toronto and Lake Ontario is spread out far below. The person is hands-free, leaning forward into the void.
Lighting & Mood: Bright, clear, sunny day. The light is sharp and unforgiving, emphasizing the height. The mood is exhilarating, terrifying, and adventurous.
Camera & Technique: Shot with a GoPro mounted on the guide's helmet to get a wide, immersive, and dynamic point-of-view angle.
Quality: 8K, hyper-detailed, with a vibrant, high-contrast look. Focus is on the person's wide-eyed expression of pure adrenaline.`
    },
    {
        id: 'losangeles',
        name: 'Los Angeles',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/losangeles/400/300',
        loadingMessage: 'Hollywood tepelerinde bir yıldız gibi...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a cool, casual Southern California outfit, standing on a hiking trail in the Hollywood Hills at golden hour.
Scene Details: The iconic Hollywood Sign is clearly visible on the hills in the background. The sprawling city of Los Angeles is hazy in the distance.
Lighting & Mood: Warm, hazy, magical California sunset light. The 'golden hour' creates a dreamy, cinematic atmosphere. The mood is aspirational, relaxed, and iconic.
Camera & Technique: Shot with an anamorphic lens on a cinema camera to create the classic widescreen look with beautiful lens flares from the setting sun.
Quality: 8K, cinematic aspect ratio (2.39:1), hyper-detailed, with a warm, slightly faded color grade. Focus is on the person's confident and happy expression.`
    },
    {
        id: 'miami',
        name: 'Miami',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/miami/400/300',
        loadingMessage: 'Miami\'nin Art Deco renkleri arasında...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a stylish person in vibrant, retro-inspired beachwear, roller-skating down the promenade on Ocean Drive in South Beach.
Scene Details: The iconic, pastel-colored Art Deco hotels line the street in the background. Classic convertible cars and neon signs add to the atmosphere.
Lighting & Mood: The warm, golden light of late afternoon. The low sun makes the pastel colors pop. The mood is energetic, fun, and full of retro glamour.
Camera & Technique: Tracking shot with a camera on a gimbal, moving alongside the person to create a sense of motion and energy. A 35mm lens captures the person and their vibrant surroundings.
Quality: 8K, hyper-detailed, with a highly saturated, warm color grade. Focus is locked on the person's joyful expression.`
    },
    {
        id: 'lima',
        name: 'Lima',
        country: 'Peru',
        imageUrl: 'https://picsum.photos/seed/lima/400/300',
        loadingMessage: 'Lima\'nın bohem ruhu keşfediliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), an artistic person enjoying a coffee at a colorful cafe in the bohemian Barranco district.
Scene Details: The background features vibrant colonial architecture, colorful street art murals, and lush bougainvillea flowers. The famous 'Bridge of Sighs' is softly blurred in the distance.
Lighting & Mood: Soft, warm afternoon light. The mood is relaxed, creative, and full of local character.
Camera & Technique: Shot with a 50mm f/1.8 lens to create a beautiful separation between the person and the rich, textured background.
Quality: 8K, hyper-detailed, with a warm, slightly saturated color grade. Focus is on the person's contemplative smile.`
    },
    {
        id: 'cartagena',
        name: 'Cartagena',
        country: 'Kolombiya',
        imageUrl: 'https://picsum.photos/seed/cartagena/400/300',
        loadingMessage: 'Cartagena\'nın renkli sokaklarında dans...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a joyful person wearing a vibrant, colorful summer dress, dancing in the middle of a historic, cobblestone street in the Walled City of Cartagena.
Scene Details: The streets are lined with brightly painted colonial buildings with wooden balconies overflowing with flowers. Fruit vendors ('palenqueras') in traditional colorful dresses are visible in the background.
Lighting & Mood: The strong, hot, tropical sunlight of the Caribbean. The light creates high contrast and makes the colors incredibly vibrant. The mood is festive, joyful, and full of life.
Camera & Technique: Shot from a low angle with a wide 28mm lens to capture the energy of the dance and the colorful architecture.
Quality: 8K, hyper-detailed, with a very saturated, high-contrast color grade. Focus is on the person's ecstatic expression.`
    },
    {
        id: 'auckland',
        name: 'Auckland',
        country: 'Yeni Zelanda',
        imageUrl: 'https://picsum.photos/seed/auckland/400/300',
        loadingMessage: 'Auckland\'da yelkenler fora!',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a happy, wind-swept look, on the deck of a sailboat in Waitematā Harbour.
Scene Details: The iconic Auckland Sky Tower and the Harbour Bridge dominate the city skyline in the background. The harbor is filled with other sailboats, earning its name 'City of Sails'.
Lighting & Mood: Bright, clear, sunny day. The light glints off the water and the city's glass buildings. The mood is adventurous, fresh, and vibrant.
Camera & Technique: Shot with a 35mm lens, capturing the person's interaction with the boat and the stunning harbor backdrop.
Quality: 8K, hyper-detailed, with a clean, crisp color grade emphasizing the blues of the water and sky. Focus is on the person's joyful expression.`
    },
    {
        id: 'melbourne',
        name: 'Melbourne',
        country: 'Avustralya',
        imageUrl: 'https://picsum.photos/seed/melbourne/400/300',
        loadingMessage: 'Melbourne\'un sanat dolu sokaklarında...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a cool, artistic person in an urban-chic outfit, standing in one of Melbourne's famous laneways, like Hosier Lane.
Scene Details: The background is a chaotic and vibrant tapestry of high-quality graffiti and street art covering every inch of the brick walls.
Lighting & Mood: Soft, overcast daylight, which is ideal for viewing street art without harsh shadows. The mood is creative, edgy, and contemporary.
Camera & Technique: Shot with a 28mm wide-angle lens to capture the person within the immersive, art-filled environment. The composition is dynamic and slightly gritty.
Quality: 8K, hyper-detailed, with a high-contrast, slightly desaturated color grade that makes the graffiti colors pop. Focus is on the person's thoughtful or cool expression.`
    },
    {
        id: 'samarkand',
        name: 'Semerkant',
        country: 'Özbekistan',
        imageUrl: 'https://picsum.photos/seed/samarkand/400/300',
        loadingMessage: 'İpek Yolu\'nun kalbinde bir yolcu...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with an expression of awe, wearing clothing with traditional Central Asian patterns, standing in the middle of the Registan square at sunset.
Scene Details: The three magnificent, enormous madrasahs covered in intricate azure and gold mosaic tilework surround the person. The scale of the architecture is breathtaking.
Lighting & Mood: The magical, warm, golden light of sunset. The low sun makes the blue tiles glow and casts long shadows across the ancient square. The mood is epic, historic, and utterly enchanting.
Camera & Technique: Shot with an ultra-wide 14mm lens from a low angle to capture the entire square and the immense scale of the buildings.
Quality: 8K, hyper-detailed, professional color grading that emphasizes the incredible blue and gold colors of the mosaics. Focus is on the person's mesmerized expression.`
    },
    {
        id: 'jaipur',
        name: 'Jaipur',
        country: 'Hindistan',
        imageUrl: 'https://picsum.photos/seed/jaipur/400/300',
        loadingMessage: 'Pembe Şehir Jaipur\'un büyüsü...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in elegant, colorful Indian attire, looking out from one of the small, ornate windows of the Hawa Mahal (Palace of Winds).
Scene Details: The iconic, pink sandstone facade of the palace with its hundreds of tiny windows ('jharokhas') is visible. Through the window, a bustling Jaipur street scene with auto-rickshaws and market stalls is softly blurred.
Lighting & Mood: Warm, soft afternoon light. The light gives the pink sandstone a beautiful, warm glow. The mood is regal, romantic, and slightly mysterious.
Camera & Technique: Shot from inside, looking out, with a 50mm lens. The person is framed by the ornate architecture of the window. Shallow depth of field keeps the focus on the person.
Quality: 8K, hyper-detailed, with a warm, rosy color palette. Focus is on the person's elegant profile and the intricate details of the palace architecture.`
    },
    {
        id: 'amman',
        name: 'Amman',
        country: 'Ürdün',
        imageUrl: 'https://picsum.photos/seed/amman/400/300',
        loadingMessage: 'Amman Kalesi\'nden şehre bakış...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a pensive person standing amidst the ancient ruins of the Amman Citadel (Jabal al-Qal'a) at sunset.
Scene Details: The person is standing near the remaining columns of the Roman Temple of Hercules. In the background, the sprawling, sand-colored cityscape of Amman covers the hills, with the massive Roman Theatre visible below.
Lighting & Mood: Warm, hazy, golden hour light. The sunset casts a beautiful glow over the ancient stones and the modern city. The mood is contemplative, historic, and panoramic.
Camera & Technique: Shot with a 35mm lens to capture the person, the ruins, and the cityscape in a balanced composition.
Quality: 8K, hyper-detailed, with a warm, slightly desaturated color grade. Focus is on the person's thoughtful expression as they overlook the city's vast history.`
    },
    {
        id: 'krakow',
        name: 'Kraków',
        country: 'Polonya',
        imageUrl: 'https://picsum.photos/seed/krakow/400/300',
        loadingMessage: 'Kraków\'un ana meydanında tarihi bir an...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a gentle smile, feeding pigeons in the middle of the vast Main Market Square (Rynek Główny) in Kraków.
Scene Details: The background features the iconic St. Mary's Basilica with its two unequal towers and the Renaissance-era Cloth Hall (Sukiennice). Horse-drawn carriages are partially visible.
Lighting & Mood: Soft, golden afternoon light. The mood is charming, peaceful, and feels like a step back in time.
Camera & Technique: Shot with a 50mm f/1.4 lens, capturing the moment with a shallow depth of field. A slightly faster shutter speed freezes the motion of the birds taking flight.
Quality: 8K, hyper-detailed, with a warm, slightly nostalgic color grade. Focus is on the person's happy interaction with the birds.`
    },
    {
        id: 'granada',
        name: 'Granada',
        country: 'İspanya',
        imageUrl: 'https://picsum.photos/seed/granada/400/300',
        loadingMessage: 'Elhamra Sarayı\'nın avlusunda bir gezinti...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a serene expression, standing in the Court of the Lions (Patio de los Leones) in the Alhambra palace.
Scene Details: The intricate Islamic architecture, with its detailed stucco work, slender marble columns, and the central lion fountain, surrounds the person.
Lighting & Mood: Dappled sunlight filtering into the courtyard, creating beautiful patterns of light and shadow. The mood is peaceful, intricate, and historically profound.
Camera & Technique: Shot with a 35mm lens to capture the delicate beauty and symmetry of the courtyard. The composition is balanced and respectful of the architecture.
Quality: 8K, hyper-detailed, professional color grading that highlights the textures of the marble and stucco. Focus is on the person's calm and appreciative expression.`
    },
    {
        id: 'kathmandu',
        name: 'Katmandu',
        country: 'Nepal',
        imageUrl: 'https://picsum.photos/seed/kathmandu/400/300',
        loadingMessage: 'Katmandu\'da ruhani bir yolculuk...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a spiritual and peaceful look, wearing a light scarf, walking amongst praying devotees at the Boudhanath Stupa at dusk.
Scene Details: The massive, white dome of the stupa with its giant, all-seeing eyes of the Buddha is the central element. Colorful prayer flags flutter in the wind, strung from the golden spire. Monks in maroon robes are visible.
Lighting & Mood: The magical 'blue hour' light is mixed with the warm glow from butter lamps lit around the stupa. The mood is deeply spiritual, serene, and vibrant.
Camera & Technique: Shot with a fast 50mm lens, capturing the atmosphere with available light. The shallow depth of field creates a beautiful bokeh from the prayer flags and lamps.
Quality: 8K, hyper-detailed, with a rich, cinematic color grade. Focus is on the person's reverent expression.`
    },
    {
        id: 'serengeti',
        name: 'Serengeti',
        country: 'Tanzanya',
        imageUrl: 'https://picsum.photos/seed/serengeti/400/300',
        loadingMessage: 'Serengeti\'de bir safari macerası...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with an adventurous spirit, wearing safari gear (khaki shirt, binoculars), looking out from an open-top safari vehicle at sunset.
Scene Details: The vast, golden plains of the Serengeti stretch to the horizon. In the middle distance, the silhouette of an acacia tree and a herd of giraffes are visible against the setting sun.
Lighting & Mood: The spectacular, fiery colors of an African sunset. The light is warm, dramatic, and dusty. The mood is adventurous, wild, and awe-inspiring.
Camera & Technique: Shot with a long telephoto lens (e.g., 200-400mm) to compress the background and bring the wildlife closer to the person.
Quality: 8K, hyper-detailed, with a warm, high-contrast color grade. Focus is on the person's excited and focused gaze.`
    },
    {
        id: 'porto',
        name: 'Porto',
        country: 'Portekiz',
        imageUrl: 'https://picsum.photos/seed/porto/400/300',
        loadingMessage: 'Porto\'nun Douro Nehri kenarında...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person enjoying a glass of port wine, sitting at a cafe in the colorful Ribeira district by the Douro River.
Scene Details: The iconic, double-deck Dom Luís I Bridge and the traditional Rabelo boats are visible in the background. The opposite bank is lined with historic port wine cellars.
Lighting & Mood: The warm, golden light of late afternoon. The light reflects beautifully off the river. The mood is relaxed, charming, and full of flavor.
Camera & Technique: Shot with a 50mm lens, capturing a candid moment. The focus is on the person and the rich color of the wine in their glass, with the background softly blurred.
Quality: 8K, hyper-detailed, with a warm, inviting color palette. Focus captures the person's contented expression.`
    },
    {
        id: 'halongbay',
        name: 'Ha Long Körfezi',
        country: 'Vietnam',
        imageUrl: 'https://picsum.photos/seed/halongbay/400/300',
        loadingMessage: 'Ha Long Körfezi\'nin ejderha adaları...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a serene person wearing a conical hat (Nón Lá), kayaking on the emerald-green waters of Ha Long Bay.
Scene Details: Thousands of majestic, limestone karst islands covered in lush greenery rise from the water around them. A traditional junk boat is visible in the distance.
Lighting & Mood: Soft, misty, ethereal morning light. The mood is tranquil, mystical, and breathtakingly beautiful.
Camera & Technique: Shot with a drone from a medium altitude, showing the person in their kayak as a small element in the vast, epic landscape.
Quality: 8K, hyper-detailed, with a cool, green and blue color palette. Focus is on the overall magnificent scenery, capturing a sense of solitary peace.`
    },
    {
        id: 'lapland',
        name: 'Laponya',
        country: 'Finlandiya',
        imageUrl: 'https://picsum.photos/seed/lapland/400/300',
        loadingMessage: 'Laponya\'da bir Ren geyiği safarisi...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a joyful smile, bundled up in warm winter clothing, sitting in a wooden sleigh pulled by a reindeer.
Scene Details: The sleigh is gliding through a pristine, snow-covered forest of pine trees. The snow is deep and untouched.
Lighting & Mood: The unique, soft, pinkish light of a polar day in mid-winter ('kaamos'). The sun is low on the horizon, creating a magical, gentle glow. The mood is enchanting, peaceful, and like a Christmas fairytale.
Camera & Technique: Shot with a 35mm lens from a low angle on a second sleigh, capturing the motion and the magical winter landscape.
Quality: 8K, hyper-detailed, with a soft, pastel color grade. Focus is on the person's happy face and the intricate details of the reindeer's harness.`
    },
    {
        id: 'salardeuyuni',
        name: 'Salar de Uyuni',
        country: 'Bolivya',
        imageUrl: 'https://picsum.photos/seed/salardeuyuni/400/300',
        loadingMessage: 'Dünyanın en büyük aynasında yürüyüş...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person walking on the Salar de Uyuni during the wet season, creating a perfect, giant mirror reflection of the sky.
Scene Details: A thin layer of water covers the vast salt flat, perfectly reflecting the dramatic, cloud-filled sky. The horizon is indistinguishable, making it seem like the person is walking in the clouds.
Lighting & Mood: Bright, surreal light. The sun is shining, creating a brilliant, almost blindingly white landscape. The mood is surreal, dreamlike, and infinite.
Camera & Technique: Shot from a very low angle with a wide 24mm lens to emphasize the perfect reflection and the feeling of walking on the sky.
Quality: 8K, hyper-detailed, with a high-key, slightly overexposed look to enhance the surreal quality. Focus is on the person and their perfect reflection.`
    },
    {
        id: 'machupicchu',
        name: 'Machu Picchu',
        country: 'Peru',
        imageUrl: 'https://picsum.photos/seed/machupicchu/400/300',
        loadingMessage: 'İnkaların kayıp şehri keşfediliyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a sense of accomplishment, wearing hiking gear, standing at the classic viewpoint overlooking the ancient Inca city of Machu Picchu at sunrise.
Scene Details: The famous ruins are spread out below, with the iconic Huayna Picchu mountain rising in the background. Low-lying clouds and mist drift through the valleys, partially obscuring the scene.
Lighting & Mood: The first golden rays of sunrise break through the clouds, illuminating parts of the ruins. The mood is mystical, awe-inspiring, and triumphant.
Camera & Technique: Shot with a wide-angle 24mm lens to capture the epic scale of the location. A polarizing filter helps cut through some of the haze.
Quality: 8K, hyper-detailed, with a dramatic, high-contrast color grade. Focus is on the person's emotional reaction to the stunning view.`
    },
    {
        id: 'chamonix',
        name: 'Chamonix',
        country: 'Fransa',
        imageUrl: 'https://picsum.photos/seed/chamonix/400/300',
        loadingMessage: 'Mont Blanc\'ın zirvesinde nefes kesen an...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in full alpine gear, standing on the Aiguille du Midi viewing platform, with the majestic Mont Blanc and the French Alps stretching out behind them.
Scene Details: The person is surrounded by a breathtaking panorama of snow-covered peaks, glaciers, and deep valleys. The air is visibly thin and crisp.
Lighting & Mood: Intense, bright, high-altitude sunlight under a deep blue sky. The mood is epic, adventurous, and humbling.
Camera & Technique: Shot with a wide-angle lens to emphasize the vastness of the mountain range. The composition places the person as a small but significant figure in the grand landscape.
Quality: 8K, hyper-detailed, with a cool, high-contrast color grade. Focus is on the person's expression of awe against the world's most stunning mountain scenery.`
    },
    {
        id: 'santabarbara',
        name: 'Santa Barbara',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/santabarbara/400/300',
        loadingMessage: 'Kaliforniya rüyası yaşanıyor...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a relaxed and happy person in stylish but casual California attire, walking along the pier at Stearns Wharf in Santa Barbara at sunset.
Scene Details: The background features the beautiful coastline, the Santa Ynez Mountains, and palm trees silhouetted against the colorful sky. People are fishing on the pier.
Lighting & Mood: The warm, magical glow of a California 'golden hour' sunset. The sky is painted with vibrant oranges, pinks, and purples. The mood is relaxed, happy, and idyllic.
Camera & Technique: Shot with an 85mm lens, walking backward as the person walks towards the camera, creating a candid, cinematic feel. The setting sun creates a beautiful lens flare.
Quality: 8K, hyper-detailed, with a warm, saturated, and dreamy color grade. Focus is on the person's carefree smile.`
    },
    {
        id: 'ibiza',
        name: 'İbiza',
        country: 'İspanya',
        imageUrl: 'https://picsum.photos/seed/ibiza/400/300',
        loadingMessage: 'İbiza\'da gün batımı ve müzik...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a stylish person in bohemian chic clothing, watching the sunset from a cliffside bar like Cafe Del Mar.
Scene Details: The person is holding a cocktail. In the background, the sun is a perfect orb dipping into the Mediterranean Sea. A DJ is spinning chill-out music, and the silhouette of other relaxed people are visible.
Lighting & Mood: The spectacular, warm colors of the sunset fill the entire scene. The mood is cool, relaxed, and iconic.
Camera & Technique: Shot with a 50mm lens, capturing the person against the stunning sunset. The focus is sharp on the person, with the sun creating a beautiful, soft bokeh.
Quality: 8K, hyper-detailed, with a vibrant, warm color grade. Focus is on the person's serene profile as they enjoy the famous sunset.`
    },
    {
        id: 'valletta',
        name: 'Valletta',
        country: 'Malta',
        imageUrl: 'https://picsum.photos/seed/valletta/400/300',
        loadingMessage: 'Valletta\'nın tarihi limanında bir gezinti...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in elegant summer attire, standing on the balcony of the Upper Barrakka Gardens, overlooking the magnificent Grand Harbour.
Scene Details: The historic, fortified cities of Senglea and Vittoriosa are visible across the deep blue water of the harbor. Traditional Maltese 'Luzzu' boats are dotted in the marina below.
Lighting & Mood: Bright, warm Mediterranean sunlight. The light brings out the golden color of the city's limestone buildings. The mood is historic, grand, and sunny.
Camera & Technique: Shot with a 35mm lens to capture the person and the breathtaking panoramic view in a single, well-composed frame.
Quality: 8K, hyper-detailed, with a high-contrast, vibrant color grade. Focus is on the person's impressed expression.`
    },
    {
        id: 'cinqueterre',
        name: 'Cinque Terre',
        country: 'İtalya',
        imageUrl: 'https://picsum.photos/seed/cinqueterre/400/300',
        loadingMessage: 'Cinque Terre\'nin renkli köylerinde kaybolun...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a happy expression, enjoying a cone of gelato, standing at the classic viewpoint in Manarola at sunset.
Scene Details: The iconic, colorful houses of the village are clustered precariously on the cliffside, cascading down to the Ligurian Sea. The setting sun illuminates the vibrant facades.
Lighting & Mood: The magical 'golden hour' light of the Italian Riviera. The light is warm, soft, and incredibly romantic. The mood is joyful, picturesque, and delicious.
Camera & Technique: Shot with a 24-70mm lens to capture the perfect composition of the person and the famous village view.
Quality: 8K, hyper-detailed, with a warm, highly saturated color grade that makes the colors of the houses pop. Focus is on the person's delighted smile.`
    },
    {
        id: 'seoraksan',
        name: 'Seoraksan',
        country: 'Güney Kore',
        imageUrl: 'https://picsum.photos/seed/seoraksan/400/300',
        loadingMessage: 'Seoraksan Ulusal Parkı\'nda sonbahar renkleri...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in comfortable hiking clothes, looking out from a mountain peak in Seoraksan National Park during peak autumn foliage.
Scene Details: The landscape is a breathtaking tapestry of vibrant red, orange, and yellow autumn leaves. Jagged, rocky peaks pierce through the sea of color. A historic Korean temple is partially visible in a valley below.
Lighting & Mood: Crisp, clear autumn afternoon light. The sunlight makes the foliage colors incredibly vivid. The mood is peaceful, breathtaking, and invigorating.
Camera & Technique: Shot with a drone, orbiting the person to reveal the vast, colorful landscape around them.
Quality: 8K, hyper-detailed, with an extremely saturated and vibrant color palette. Focus is on the person's expression of awe.`
    },
    {
        id: 'bled',
        name: 'Bled Gölü',
        country: 'Slovenya',
        imageUrl: 'https://picsum.photos/seed/bled/400/300',
        loadingMessage: 'Bled Gölü\'nde bir masal anı...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a serene look, standing in a traditional wooden 'pletna' boat as it glides across the tranquil, emerald waters of Lake Bled.
Scene Details: In the background, the iconic island with its church is perfectly framed. Bled Castle is perched on a high cliff overlooking the lake. The Julian Alps are visible in the distance.
Lighting & Mood: Soft, magical morning light. A light mist is rising from the lake's surface. The mood is romantic, peaceful, and like a real-life fairytale.
Camera & Technique: Shot with an 85mm portrait lens to create a beautiful, compressed background and a dreamy bokeh effect.
Quality: 8K, hyper-detailed, with a soft, slightly desaturated color grade. Focus is on the person's calm and happy expression.`
    },
    {
        id: 'madeira',
        name: 'Madeira',
        country: 'Portekiz',
        imageUrl: 'https://picsum.photos/seed/madeira/400/300',
        loadingMessage: 'Madeira\'nın bulutları üzerinde yürüyüş...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), an adventurous person in hiking gear, standing on the trail leading to Pico do Arieiro, high above a sea of clouds.
Scene Details: The person is on a narrow, dramatic mountain path. The rugged, volcanic peaks of the island pierce through a thick, white blanket of clouds below.
Lighting & Mood: The intense, clear light of sunrise. The rising sun colors the clouds in shades of orange and pink. The mood is epic, otherworldly, and exhilarating.
Camera & Technique: Shot with a very wide-angle lens (14mm) to capture the immense scale of the landscape and the dramatic sea of clouds.
Quality: 8K, hyper-detailed, with a high-contrast, vibrant color grade. Focus is on the person's triumphant posture against the incredible backdrop.`
    },
    {
        id: 'strasbourg',
        name: 'Strazburg',
        country: 'Fransa',
        imageUrl: 'https://picsum.photos/seed/strasbourg/400/300',
        loadingMessage: 'Strazburg\'da bir Noel masalı...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a festive smile, holding a cup of mulled wine (vin chaud) at the famous Strasbourg Christmas Market at night.
Scene Details: The background is a magical, festive blur of lights. Half-timbered medieval houses are elaborately decorated with Christmas lights and ornaments. The magnificent Strasbourg Cathedral is visible in the distance.
Lighting & Mood: The warm, magical glow from millions of Christmas lights and market stalls. A light snow might be falling. The mood is festive, cozy, and full of holiday cheer.
Camera & Technique: Shot with a 50mm f/1.2 lens. The extremely wide aperture turns the background lights into large, beautiful bokeh orbs.
Quality: 8K, hyper-detailed, with a very warm and inviting color grade. Focus is on the person's happy expression.`
    },
    {
        id: 'tulum',
        name: 'Tulum',
        country: 'Meksika',
        imageUrl: 'https://picsum.photos/seed/tulum/400/300',
        loadingMessage: 'Tulum\'un bohem plajlarında rahatlama...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a stylish person in bohemian beach attire, relaxing on a large swing at a chic, rustic beach club in Tulum.
Scene Details: The background features the white sand beach, turquoise Caribbean Sea, and lush palm trees. The aesthetic is natural, with lots of wood, macrame, and tropical plants.
Lighting & Mood: Soft, warm, late afternoon light filtering through the palm trees. The mood is relaxed, chic, and effortlessly cool.
Camera & Technique: Shot with a 35mm lens with a shallow depth of field to create a dreamy, relaxed vibe.
Quality: 8K, hyper-detailed, with a warm, slightly desaturated, film-like color grade. Focus is on the person's serene and stylish posture.`
    },
    {
        id: 'wadirum',
        name: 'Wadi Rum',
        country: 'Ürdün',
        imageUrl: 'https://picsum.photos/seed/wadirum/400/300',
        loadingMessage: 'Wadi Rum\'un Mars\'a benzeyen çöllerinde...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person dressed like a modern explorer, sitting by a campfire at a Bedouin camp at night in the Wadi Rum desert.
Scene Details: The vast, star-filled desert sky and the Milky Way are incredibly clear and bright overhead. The dramatic, red sandstone mountains are visible as dark silhouettes.
Lighting & Mood: The only light source is the warm, flickering glow of the campfire, which illuminates the person's face. The mood is adventurous, peaceful, and cosmic.
Camera & Technique: Shot on a tripod with a Sony A7S III and a 24mm f/1.4 lens. A long exposure captures the stunning detail of the night sky, while the campfire provides natural light for the person.
Quality: 8K, hyper-detailed, with a cool tone for the sky and a warm tone for the foreground. Focus is on the person's contemplative expression as they gaze into the fire.`
    },
    {
        id: 'yosemite',
        name: 'Yosemite',
        country: 'ABD',
        imageUrl: 'https://picsum.photos/seed/yosemite/400/300',
        loadingMessage: 'Yosemite Vadisi\'nin görkemi...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in outdoor gear standing at Tunnel View, looking out at the iconic Yosemite Valley.
Scene Details: The classic, breathtaking view includes El Capitan on the left, Bridalveil Fall on the right, and the granite dome of Half Dome in the distance. The valley is filled with pine trees.
Lighting & Mood: The dramatic light of late afternoon, with the sun's rays streaming into the valley ('crepuscular rays'). The mood is epic, majestic, and filled with the power of nature.
Camera & Technique: Shot with a wide-angle 24mm lens on a tripod to capture the grand scale of the landscape. A graduated neutral-density filter is used to balance the exposure between the bright sky and the darker valley.
Quality: 8K, hyper-detailed, with a high-contrast, natural color grade. Focus is on the person taking in the awe-inspiring view.`
    },
    {
        id: 'banff',
        name: 'Banff',
        country: 'Kanada',
        imageUrl: 'https://picsum.photos/seed/banff/400/300',
        loadingMessage: 'Kanada Kayalık Dağları\'nın kalbinde...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a cozy plaid jacket, holding a warm mug, standing on the shore of the incredibly turquoise Lake Louise.
Scene Details: The vibrant, turquoise, glacier-fed lake is the centerpiece. In the background, the Victoria Glacier and the surrounding snow-capped peaks of the Canadian Rockies are perfectly reflected in the calm water.
Lighting & Mood: Crisp, clear morning light. The mood is peaceful, stunning, and quintessentially Canadian.
Camera & Technique: Shot with a 35mm lens and a polarizing filter to enhance the turquoise color of the lake and the reflections.
Quality: 8K, hyper-detailed, with a cool, vibrant color palette. Focus is on the person's peaceful expression as they enjoy the pristine natural beauty.`
    },
    {
        id: 'kyiv',
        name: 'Kiev',
        country: 'Ukrayna',
        imageUrl: 'https://picsum.photos/seed/kyiv/400/300',
        loadingMessage: 'Kiev\'in altın kubbeleri altında...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a hopeful and resilient expression, standing on a viewpoint overlooking the city of Kyiv at sunrise.
Scene Details: The golden domes of St. Michael's Golden-Domed Monastery and the Saint Sophia Cathedral glisten in the first light of day. The Dnipro River flows peacefully in the background.
Lighting & Mood: The warm, golden light of sunrise, symbolizing hope and a new day. The mood is contemplative, resilient, and deeply beautiful.
Camera & Technique: Shot with a 70-200mm lens to compress the background and bring the iconic golden domes closer to the person.
Quality: 8K, hyper-detailed, with a warm, high-contrast color grade. Focus is on the person's strong and thoughtful profile.`
    },
    {
        id: 'madrid',
        name: 'Madrid',
        country: 'İspanya',
        imageUrl: 'https://picsum.photos/seed/madrid/400/300',
        loadingMessage: 'Madrid\'de bir tapas akşamı...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a lively expression, enjoying tapas and a glass of wine at a bustling, traditional tapas bar in Madrid.
Scene Details: The bar is crowded and full of energy. The background is a blur of people, hanging Serrano hams, and colorful tiles. The person is reaching for a 'pincho'.
Lighting & Mood: Warm, vibrant, and slightly chaotic indoor lighting. The mood is social, energetic, and delicious.
Camera & Technique: Shot with a 35mm lens to capture the lively atmosphere. The focus is on the person's face, with a shallow depth of field to blur the busy surroundings.
Quality: 8K, hyper-detailed, with a warm, rich color grade. Focus is on the person's happy and engaged expression.`
    },
    {
        id: 'santiago',
        name: 'Santiago',
        country: 'Şili',
        imageUrl: 'https://picsum.photos/seed/santiago/400/300',
        loadingMessage: 'And Dağları\'nın gölgesinde Santiago...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person in a stylish urban outfit, standing on the Sky Costanera, the tallest observation deck in Latin America, at sunset.
Scene Details: The person is looking out over the vast city of Santiago. In the background, the massive, snow-capped Andes mountain range is bathed in the pink and orange light of the setting sun ('alpenglow').
Lighting & Mood: The dramatic, colorful light of a high-altitude sunset. The mood is epic, urban, and breathtaking.
Camera & Technique: Shot with a wide-angle lens to capture the person against the immense scale of both the city and the mountains.
Quality: 8K, hyper-detailed, with a vibrant color grade. Focus is on the person's awe-struck silhouette.`
    },
    {
        id: 'cappadocia',
        name: 'Kapadokya',
        country: 'Türkiye',
        imageUrl: 'https://picsum.photos/seed/cappadocia/400/300',
        loadingMessage: 'Kapadokya\'da sıcak hava balonuyla rüya gibi bir uçuş...',
        prompt: `Masterpiece, cinematic photography, ultra-realistic portrait of (face from uploaded photo), a person with a magical expression, standing on a scenic viewpoint in Göreme at sunrise, as hundreds of hot air balloons fill the sky.
Scene Details: The unique 'fairy chimney' rock formations of Cappadocia are spread across the landscape below. Dozens of colorful hot air balloons are rising with the sun, creating a surreal and beautiful scene.
Lighting & Mood: The soft, golden light of sunrise. The mood is dreamlike, magical, and absolutely unforgettable.
Camera & Technique: Shot with a 50mm lens to create a natural perspective, focusing on the person's reaction with the balloons creating a stunning, colorful bokeh in the background.
Quality: 8K, hyper-detailed, with a warm, pastel color palette. Focus is on the person's face, filled with wonder.`
    }
];
