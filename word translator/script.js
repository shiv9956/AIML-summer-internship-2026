// ============================================
// LinguaFlow — Universal Word Translator
// ============================================

// --- Language Data (100+ languages with flags) ---
const LANGUAGES = [
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
    { code: 'sq', name: 'Albanian', flag: '🇦🇱' },
    { code: 'am', name: 'Amharic', flag: '🇪🇹' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hy', name: 'Armenian', flag: '🇦🇲' },
    { code: 'az', name: 'Azerbaijani', flag: '🇦🇿' },
    { code: 'eu', name: 'Basque', flag: '🏴' },
    { code: 'be', name: 'Belarusian', flag: '🇧🇾' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
    { code: 'bs', name: 'Bosnian', flag: '🇧🇦' },
    { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' },
    { code: 'ca', name: 'Catalan', flag: '🏴' },
    { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
    { code: 'ny', name: 'Chichewa', flag: '🇲🇼' },
    { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' },
    { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇹🇼' },
    { code: 'co', name: 'Corsican', flag: '🇫🇷' },
    { code: 'hr', name: 'Croatian', flag: '🇭🇷' },
    { code: 'cs', name: 'Czech', flag: '🇨🇿' },
    { code: 'da', name: 'Danish', flag: '🇩🇰' },
    { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'eo', name: 'Esperanto', flag: '🌍' },
    { code: 'et', name: 'Estonian', flag: '🇪🇪' },
    { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'fy', name: 'Frisian', flag: '🇳🇱' },
    { code: 'gl', name: 'Galician', flag: '🇪🇸' },
    { code: 'ka', name: 'Georgian', flag: '🇬🇪' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'el', name: 'Greek', flag: '🇬🇷' },
    { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
    { code: 'ht', name: 'Haitian Creole', flag: '🇭🇹' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'haw', name: 'Hawaiian', flag: '🏝️' },
    { code: 'iw', name: 'Hebrew', flag: '🇮🇱' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'hmn', name: 'Hmong', flag: '🌏' },
    { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
    { code: 'is', name: 'Icelandic', flag: '🇮🇸' },
    { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'ga', name: 'Irish', flag: '🇮🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'jw', name: 'Javanese', flag: '🇮🇩' },
    { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
    { code: 'kk', name: 'Kazakh', flag: '🇰🇿' },
    { code: 'km', name: 'Khmer', flag: '🇰🇭' },
    { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'ku', name: 'Kurdish', flag: '🌍' },
    { code: 'ky', name: 'Kyrgyz', flag: '🇰🇬' },
    { code: 'lo', name: 'Lao', flag: '🇱🇦' },
    { code: 'la', name: 'Latin', flag: '🏛️' },
    { code: 'lv', name: 'Latvian', flag: '🇱🇻' },
    { code: 'lt', name: 'Lithuanian', flag: '🇱🇹' },
    { code: 'lb', name: 'Luxembourgish', flag: '🇱🇺' },
    { code: 'mk', name: 'Macedonian', flag: '🇲🇰' },
    { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
    { code: 'ms', name: 'Malay', flag: '🇲🇾' },
    { code: 'ml', name: 'Malayalam', flag: '🇮🇳' },
    { code: 'mt', name: 'Maltese', flag: '🇲🇹' },
    { code: 'mi', name: 'Maori', flag: '🇳🇿' },
    { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
    { code: 'mn', name: 'Mongolian', flag: '🇲🇳' },
    { code: 'my', name: 'Myanmar (Burmese)', flag: '🇲🇲' },
    { code: 'ne', name: 'Nepali', flag: '🇳🇵' },
    { code: 'no', name: 'Norwegian', flag: '🇳🇴' },
    { code: 'or', name: 'Odia', flag: '🇮🇳' },
    { code: 'ps', name: 'Pashto', flag: '🇦🇫' },
    { code: 'fa', name: 'Persian', flag: '🇮🇷' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
    { code: 'ro', name: 'Romanian', flag: '🇷🇴' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
    { code: 'sm', name: 'Samoan', flag: '🇼🇸' },
    { code: 'gd', name: 'Scots Gaelic', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { code: 'sr', name: 'Serbian', flag: '🇷🇸' },
    { code: 'st', name: 'Sesotho', flag: '🇱🇸' },
    { code: 'sn', name: 'Shona', flag: '🇿🇼' },
    { code: 'sd', name: 'Sindhi', flag: '🇵🇰' },
    { code: 'si', name: 'Sinhala', flag: '🇱🇰' },
    { code: 'sk', name: 'Slovak', flag: '🇸🇰' },
    { code: 'sl', name: 'Slovenian', flag: '🇸🇮' },
    { code: 'so', name: 'Somali', flag: '🇸🇴' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'su', name: 'Sundanese', flag: '🇮🇩' },
    { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
    { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
    { code: 'tg', name: 'Tajik', flag: '🇹🇯' },
    { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
    { code: 'tt', name: 'Tatar', flag: '🇷🇺' },
    { code: 'te', name: 'Telugu', flag: '🇮🇳' },
    { code: 'th', name: 'Thai', flag: '🇹🇭' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
    { code: 'tk', name: 'Turkmen', flag: '🇹🇲' },
    { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
    { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
    { code: 'ug', name: 'Uyghur', flag: '🇨🇳' },
    { code: 'uz', name: 'Uzbek', flag: '🇺🇿' },
    { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
    { code: 'cy', name: 'Welsh', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
    { code: 'xh', name: 'Xhosa', flag: '🇿🇦' },
    { code: 'yi', name: 'Yiddish', flag: '🌍' },
    { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
    { code: 'zu', name: 'Zulu', flag: '🇿🇦' },
];

// --- State ---
let sourceLanguage = 'en';
let targetLanguage = 'es';
let translationHistory = JSON.parse(localStorage.getItem('linguaflow_history') || '[]');

// --- DOM Elements ---
const sourceText = document.getElementById('source-text');
const targetText = document.getElementById('target-text');
const translateBtn = document.getElementById('translate-btn');
const swapBtn = document.getElementById('swap-btn');
const clearBtn = document.getElementById('clear-btn');
const copyBtn = document.getElementById('copy-btn');
const speakSourceBtn = document.getElementById('speak-source-btn');
const speakTargetBtn = document.getElementById('speak-target-btn');
const charCount = document.getElementById('char-count');
const translationBadge = document.getElementById('translation-badge');
const historyList = document.getElementById('history-list');
const historyEmpty = document.getElementById('history-empty');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toast-text');

// Custom select elements
const sourceSelect = document.getElementById('source-select');
const targetSelect = document.getElementById('target-select');
const sourceTrigger = document.getElementById('source-trigger');
const targetTrigger = document.getElementById('target-trigger');
const sourceLabel = document.getElementById('source-label');
const targetLabel = document.getElementById('target-label');
const sourceFlag = document.getElementById('source-flag');
const targetFlag = document.getElementById('target-flag');
const sourceDropdown = document.getElementById('source-dropdown');
const targetDropdown = document.getElementById('target-dropdown');
const sourceSearch = document.getElementById('source-search');
const targetSearch = document.getElementById('target-search');
const sourceListEl = document.getElementById('source-list');
const targetListEl = document.getElementById('target-list');

// --- Initialization ---
function init() {
    populateDropdown(sourceListEl, 'source');
    populateDropdown(targetListEl, 'target');
    updateSelectDisplay('source', sourceLanguage);
    updateSelectDisplay('target', targetLanguage);
    renderHistory();
    bindEvents();
}

// --- Populate Dropdown ---
function populateDropdown(listEl, type, filter = '') {
    listEl.innerHTML = '';
    const filtered = LANGUAGES.filter(lang =>
        lang.name.toLowerCase().includes(filter.toLowerCase()) ||
        lang.code.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        const li = document.createElement('li');
        li.className = 'dropdown-item';
        li.textContent = 'No languages found';
        li.style.color = 'var(--text-muted)';
        li.style.cursor = 'default';
        listEl.appendChild(li);
        return;
    }

    filtered.forEach(lang => {
        const li = document.createElement('li');
        li.className = 'dropdown-item';
        const currentLang = type === 'source' ? sourceLanguage : targetLanguage;
        if (lang.code === currentLang) li.classList.add('active');

        li.innerHTML = `<span class="item-flag">${lang.flag}</span><span>${lang.name}</span>`;
        li.dataset.code = lang.code;

        li.addEventListener('click', () => {
            if (type === 'source') {
                sourceLanguage = lang.code;
                updateSelectDisplay('source', lang.code);
            } else {
                targetLanguage = lang.code;
                updateSelectDisplay('target', lang.code);
            }
            closeAllDropdowns();
        });

        listEl.appendChild(li);
    });
}

// --- Update Select Display ---
function updateSelectDisplay(type, code) {
    const lang = LANGUAGES.find(l => l.code === code);
    if (!lang) return;

    if (type === 'source') {
        sourceLabel.textContent = lang.name;
        sourceFlag.textContent = lang.flag;
    } else {
        targetLabel.textContent = lang.name;
        targetFlag.textContent = lang.flag;
    }
}

// --- Dropdown Controls ---
function toggleDropdown(selectEl, searchEl, listEl, type) {
    const isOpen = selectEl.classList.contains('open');
    closeAllDropdowns();
    if (!isOpen) {
        selectEl.classList.add('open');
        searchEl.value = '';
        populateDropdown(listEl, type);
        setTimeout(() => searchEl.focus(), 50);
    }
}

function closeAllDropdowns() {
    sourceSelect.classList.remove('open');
    targetSelect.classList.remove('open');
}

// --- Bind Events ---
function bindEvents() {
    // Source dropdown
    sourceTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(sourceSelect, sourceSearch, sourceListEl, 'source');
    });

    sourceSearch.addEventListener('input', () => {
        populateDropdown(sourceListEl, 'source', sourceSearch.value);
    });

    sourceSearch.addEventListener('click', (e) => e.stopPropagation());

    // Target dropdown
    targetTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(targetSelect, targetSearch, targetListEl, 'target');
    });

    targetSearch.addEventListener('input', () => {
        populateDropdown(targetListEl, 'target', targetSearch.value);
    });

    targetSearch.addEventListener('click', (e) => e.stopPropagation());

    // Close dropdowns on outside click
    document.addEventListener('click', closeAllDropdowns);

    // Prevent dropdown close when clicking inside
    sourceDropdown.addEventListener('click', (e) => e.stopPropagation());
    targetDropdown.addEventListener('click', (e) => e.stopPropagation());

    // Character count
    sourceText.addEventListener('input', () => {
        const len = sourceText.value.length;
        charCount.textContent = `${len} / 500`;
    });

    // Translate button
    translateBtn.addEventListener('click', translate);

    // Keyboard shortcut: Ctrl+Enter or Enter to translate
    sourceText.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            translate();
        }
    });

    // Swap button
    swapBtn.addEventListener('click', swapLanguages);

    // Clear button
    clearBtn.addEventListener('click', () => {
        sourceText.value = '';
        targetText.innerHTML = '<span class="placeholder-text">Translation will appear here...</span>';
        charCount.textContent = '0 / 500';
        translationBadge.textContent = '';
        sourceText.focus();
    });

    // Copy button
    copyBtn.addEventListener('click', copyTranslation);

    // Speak buttons
    speakSourceBtn.addEventListener('click', () => speak(sourceText.value, sourceLanguage));
    speakTargetBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (text && text !== 'Translation will appear here...') {
            speak(text, targetLanguage);
        }
    });

    // Clear history
    clearHistoryBtn.addEventListener('click', () => {
        translationHistory = [];
        localStorage.setItem('linguaflow_history', '[]');
        renderHistory();
        showToast('History cleared');
    });
}

// --- Translation Engine ---
// Uses Google Translate with dictionary mode (dt=bd) to get real word meanings
// instead of transliterations (e.g. "नमस्ते" instead of "हैलो" for "hello")

// Translate a single word and prefer its dictionary entry (native meaning)
async function translateWord(word, sl, tl) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(sl)}&tl=${encodeURIComponent(tl)}&dt=t&dt=bd&q=${encodeURIComponent(word)}`;
    const response = await fetch(url);
    const data = await response.json();

    // data[5] contains dictionary results (dt=bd) — these give real word meanings
    // e.g. for "hello" → Hindi, dictionary returns ["नमस्ते", "नमस्कार", "हैलो"]
    if (data && data[5] && data[5][0] && data[5][0][1] && data[5][0][1][0]) {
        return data[5][0][1][0]; // Top dictionary entry = most native translation
    }

    // Fallback to direct translation (dt=t) if no dictionary entry exists
    if (data && data[0]) {
        return data[0].map(s => s[0]).filter(Boolean).join('');
    }

    return word;
}

// Translate a full phrase/sentence directly
async function translatePhrase(text, sl, tl) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(sl)}&tl=${encodeURIComponent(tl)}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data && data[0]) {
        return data[0].map(s => s[0]).filter(Boolean).join('');
    }
    return null;
}

// Smart translation: uses word-by-word dictionary lookup for short text,
// phrase translation for longer text
async function smartTranslate(text, sl, tl) {
    const words = text.trim().split(/\s+/);

    // For short text (1-6 words), translate each word via dictionary
    // to get proper native meanings instead of transliterations
    if (words.length <= 6) {
        const wordResults = await Promise.all(
            words.map(word => translateWord(word, sl, tl))
        );
        return wordResults.join(' ');
    }

    // For longer text, use full phrase translation (better grammar/context)
    return await translatePhrase(text, sl, tl);
}

// --- Main Translation Handler ---
async function translate() {
    const text = sourceText.value.trim();
    if (!text) {
        showToast('Please enter some text to translate');
        sourceText.focus();
        return;
    }

    if (sourceLanguage === targetLanguage) {
        targetText.innerHTML = '';
        targetText.textContent = text;
        showToast('Source and target languages are the same');
        return;
    }

    // Loading state
    translateBtn.classList.add('loading');
    translateBtn.disabled = true;
    targetText.innerHTML = '<span class="placeholder-text">Translating...</span>';
    translationBadge.textContent = '';

    try {
        const translated = await smartTranslate(text, sourceLanguage, targetLanguage);

        if (translated) {
            targetText.innerHTML = '';
            targetText.textContent = translated;

            const sourceLang = LANGUAGES.find(l => l.code === sourceLanguage);
            const targetLang = LANGUAGES.find(l => l.code === targetLanguage);
            translationBadge.textContent = `${sourceLang?.name || sourceLanguage} → ${targetLang?.name || targetLanguage}`;

            // Add to history
            addToHistory(text, translated, sourceLanguage, targetLanguage);
        } else {
            targetText.innerHTML = '<span class="placeholder-text" style="color: #f87171;">Translation failed. Please try again.</span>';
            showToast('Translation error. Please try again.');
        }
    } catch (error) {
        targetText.innerHTML = '<span class="placeholder-text" style="color: #f87171;">Network error. Check your connection.</span>';
        showToast('Network error. Please check your connection.');
        console.error('Translation error:', error);
    } finally {
        translateBtn.classList.remove('loading');
        translateBtn.disabled = false;
    }
}

// --- Swap Languages ---
function swapLanguages() {
    const tempLang = sourceLanguage;
    sourceLanguage = targetLanguage;
    targetLanguage = tempLang;

    updateSelectDisplay('source', sourceLanguage);
    updateSelectDisplay('target', targetLanguage);

    // Also swap text if there's a translation
    const currentTranslation = targetText.textContent;
    if (currentTranslation && currentTranslation !== 'Translation will appear here...' && currentTranslation !== 'Translating...') {
        const currentSource = sourceText.value;
        sourceText.value = currentTranslation;
        targetText.textContent = currentSource;
        charCount.textContent = `${currentTranslation.length} / 500`;

        const sourceLang = LANGUAGES.find(l => l.code === sourceLanguage);
        const targetLang = LANGUAGES.find(l => l.code === targetLanguage);
        translationBadge.textContent = `${sourceLang?.name} → ${targetLang?.name}`;
    }
}

// --- Copy Translation ---
function copyTranslation() {
    const text = targetText.textContent;
    if (!text || text === 'Translation will appear here...' || text === 'Translating...') {
        showToast('Nothing to copy');
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard! ✓');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard! ✓');
    });
}

// --- Text-to-Speech ---
// Track the currently playing audio so we can stop it
let currentAudio = null;

function speak(text, langCode) {
    if (!text) {
        showToast('No text to speak');
        return;
    }

    // Stop any currently playing audio or speech
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    window.speechSynthesis.cancel();

    // Use Google Translate TTS — works for all languages
    // Split into chunks of ~200 chars to respect the API limit
    const chunks = splitTextForTTS(text, 200);
    playChunks(chunks, langCode, 0);
}

function splitTextForTTS(text, maxLen) {
    if (text.length <= maxLen) return [text];
    const chunks = [];
    let remaining = text;
    while (remaining.length > 0) {
        if (remaining.length <= maxLen) {
            chunks.push(remaining);
            break;
        }
        // Try to split at a space
        let splitIndex = remaining.lastIndexOf(' ', maxLen);
        if (splitIndex <= 0) splitIndex = maxLen;
        chunks.push(remaining.substring(0, splitIndex));
        remaining = remaining.substring(splitIndex).trim();
    }
    return chunks;
}

function playChunks(chunks, langCode, index) {
    if (index >= chunks.length) return;

    const chunk = chunks[index];
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${encodeURIComponent(langCode)}&client=tw-ob&q=${encodeURIComponent(chunk)}`;

    const audio = new Audio(url);
    currentAudio = audio;

    audio.onended = () => {
        currentAudio = null;
        playChunks(chunks, langCode, index + 1);
    };

    audio.onerror = () => {
        // Fallback to browser speechSynthesis if Google TTS fails
        currentAudio = null;
        fallbackSpeak(chunk, langCode);
    };

    audio.play().catch(() => {
        // Fallback to browser speechSynthesis
        currentAudio = null;
        fallbackSpeak(chunk, langCode);
    });
}

function fallbackSpeak(text, langCode) {
    if (!('speechSynthesis' in window)) {
        showToast('Speech not available');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const baseLang = langCode.split('-')[0].toLowerCase();
    const match = voices.find(v => v.lang.toLowerCase() === langCode.toLowerCase())
              || voices.find(v => v.lang.toLowerCase().startsWith(baseLang));
    if (match) {
        utterance.voice = match;
        utterance.lang = match.lang;
    }
    window.speechSynthesis.speak(utterance);
}

// --- History ---
function addToHistory(source, translated, srcLang, tgtLang) {
    const entry = {
        id: Date.now(),
        source,
        translated,
        srcLang,
        tgtLang,
        timestamp: new Date().toISOString()
    };

    // Avoid duplicates
    translationHistory = translationHistory.filter(h =>
        !(h.source === source && h.srcLang === srcLang && h.tgtLang === tgtLang)
    );

    translationHistory.unshift(entry);
    if (translationHistory.length > 20) translationHistory = translationHistory.slice(0, 20);

    localStorage.setItem('linguaflow_history', JSON.stringify(translationHistory));
    renderHistory();
}

function renderHistory() {
    const items = historyList.querySelectorAll('.history-item');
    items.forEach(item => item.remove());

    if (translationHistory.length === 0) {
        historyEmpty.style.display = 'block';
        return;
    }

    historyEmpty.style.display = 'none';

    translationHistory.forEach((entry, index) => {
        const srcLang = LANGUAGES.find(l => l.code === entry.srcLang);
        const tgtLang = LANGUAGES.find(l => l.code === entry.tgtLang);

        const div = document.createElement('div');
        div.className = 'history-item';
        div.style.animationDelay = `${index * 0.05}s`;
        div.innerHTML = `
            <div class="history-langs">
                <span>${srcLang?.flag || ''} ${srcLang?.name || entry.srcLang}</span>
                <span class="history-arrow">→</span>
                <span>${tgtLang?.flag || ''} ${tgtLang?.name || entry.tgtLang}</span>
            </div>
            <div class="history-texts">
                <span class="history-source">${escapeHtml(entry.source)}</span>
                <span class="history-divider">→</span>
                <span class="history-target">${escapeHtml(entry.translated)}</span>
            </div>
        `;

        div.addEventListener('click', () => {
            sourceLanguage = entry.srcLang;
            targetLanguage = entry.tgtLang;
            updateSelectDisplay('source', entry.srcLang);
            updateSelectDisplay('target', entry.tgtLang);
            sourceText.value = entry.source;
            targetText.innerHTML = '';
            targetText.textContent = entry.translated;
            charCount.textContent = `${entry.source.length} / 500`;
            translationBadge.textContent = `${srcLang?.name || entry.srcLang} → ${tgtLang?.name || entry.tgtLang}`;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        historyList.appendChild(div);
    });
}

// --- Toast Notification ---
function showToast(message) {
    toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// --- Utility ---
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// --- Start ---
document.addEventListener('DOMContentLoaded', init);
