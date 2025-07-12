// Sound Manager Class
class SoundManager {
    constructor() {
        this.sounds = {};
        this.initializeSounds();
    }

    initializeSounds() {
        // Create audio contexts for different sound effects
        this.sounds = {
            pop: this.createPopSound(),
            click: this.createClickSound(),
            success: this.createSuccessSound(),
            sparkle: this.createSparkleSound(),
            boop: this.createBoopSound()
        };
    }

    createPopSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        return { audioContext, oscillator, gainNode };
    }

    createClickSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.05);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        
        return { audioContext, oscillator, gainNode };
    }

    createSuccessSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        return { audioContext, oscillator, gainNode };
    }

    createSparkleSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(2000, audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        return { audioContext, oscillator, gainNode };
    }

    createBoopSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.08);
        
        gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
        
        return { audioContext, oscillator, gainNode };
    }

    playSound(soundName) {
        try {
            const sound = this.sounds[soundName];
            if (sound) {
                // Resume audio context if suspended
                if (sound.audioContext.state === 'suspended') {
                    sound.audioContext.resume();
                }
                
                // Create new instances for each play
                const newOscillator = sound.audioContext.createOscillator();
                const newGainNode = sound.audioContext.createGain();
                
                newOscillator.connect(newGainNode);
                newGainNode.connect(sound.audioContext.destination);
                
                // Apply the same frequency and gain patterns
                if (soundName === 'pop') {
                    newOscillator.frequency.setValueAtTime(800, sound.audioContext.currentTime);
                    newOscillator.frequency.exponentialRampToValueAtTime(400, sound.audioContext.currentTime + 0.1);
                    newGainNode.gain.setValueAtTime(0.3, sound.audioContext.currentTime);
                    newGainNode.gain.exponentialRampToValueAtTime(0.01, sound.audioContext.currentTime + 0.1);
                    newOscillator.start();
                    newOscillator.stop(sound.audioContext.currentTime + 0.1);
                } else if (soundName === 'click') {
                    newOscillator.frequency.setValueAtTime(600, sound.audioContext.currentTime);
                    newOscillator.frequency.exponentialRampToValueAtTime(300, sound.audioContext.currentTime + 0.05);
                    newGainNode.gain.setValueAtTime(0.2, sound.audioContext.currentTime);
                    newGainNode.gain.exponentialRampToValueAtTime(0.01, sound.audioContext.currentTime + 0.05);
                    newOscillator.start();
                    newOscillator.stop(sound.audioContext.currentTime + 0.05);
                } else if (soundName === 'success') {
                    newOscillator.frequency.setValueAtTime(523, sound.audioContext.currentTime);
                    newOscillator.frequency.setValueAtTime(659, sound.audioContext.currentTime + 0.1);
                    newOscillator.frequency.setValueAtTime(784, sound.audioContext.currentTime + 0.2);
                    newGainNode.gain.setValueAtTime(0.3, sound.audioContext.currentTime);
                    newGainNode.gain.exponentialRampToValueAtTime(0.01, sound.audioContext.currentTime + 0.3);
                    newOscillator.start();
                    newOscillator.stop(sound.audioContext.currentTime + 0.3);
                } else if (soundName === 'sparkle') {
                    newOscillator.frequency.setValueAtTime(1000, sound.audioContext.currentTime);
                    newOscillator.frequency.exponentialRampToValueAtTime(2000, sound.audioContext.currentTime + 0.1);
                    newOscillator.frequency.exponentialRampToValueAtTime(500, sound.audioContext.currentTime + 0.2);
                    newGainNode.gain.setValueAtTime(0.2, sound.audioContext.currentTime);
                    newGainNode.gain.exponentialRampToValueAtTime(0.01, sound.audioContext.currentTime + 0.2);
                    newOscillator.start();
                    newOscillator.stop(sound.audioContext.currentTime + 0.2);
                } else if (soundName === 'boop') {
                    newOscillator.frequency.setValueAtTime(400, sound.audioContext.currentTime);
                    newOscillator.frequency.exponentialRampToValueAtTime(200, sound.audioContext.currentTime + 0.08);
                    newGainNode.gain.setValueAtTime(0.25, sound.audioContext.currentTime);
                    newGainNode.gain.exponentialRampToValueAtTime(0.01, sound.audioContext.currentTime + 0.08);
                    newOscillator.start();
                    newOscillator.stop(sound.audioContext.currentTime + 0.08);
                }
            }
        } catch (error) {
            console.log('Sound playback failed:', error);
        }
    }
}

// Wikipedia Rabbit Hole Explorer
class WikipediaExplorer {
    constructor() {
        this.explorationTree = null;
        this.currentNode = null;
        this.userInterests = [];
        this.currentSuggestions = [];
        this.interestTabs = [];
        this.lastOpenedPage = null; // Store the last opened page for Done
        this.userBehavior = {
            clickedTopics: [],
            timeSpent: {},
            searchPatterns: this.loadPersistentInterests()
        };
        
        this.soundManager = new SoundManager();
        this.initializeEventListeners();
    }

    // Tree structure methods
    createTreeNode(page, parent = null) {
        return {
            ...page,
            children: [],
            parent: parent,
            suggestions: [], // Unpicked options at this step
            visitedAt: new Date().toLocaleTimeString(),
            summary: this.truncateText(page.extract, 100) // Short summary
        };
    }

    addToTree(page, pickedSuggestion = null) {
        const newNode = this.createTreeNode(page, this.currentNode);
        
        if (this.currentNode) {
            // Add to current node's children
            this.currentNode.children.push(newNode);
            
            // Store unpicked suggestions at this step
            if (this.currentSuggestions.length > 0) {
                this.currentNode.suggestions = this.currentSuggestions.filter(s => 
                    s.pageid !== pickedSuggestion?.pageid
                );
            }
        } else {
            // First page - create root
            this.explorationTree = newNode;
        }
        
        this.currentNode = newNode;
        this.updateExploreCounter();
        this.updateExploredList();
    }

    goBackToNode(node) {
        this.currentNode = node;
        // Restore suggestions from that point if available
        if (node.suggestions.length > 0) {
            this.currentSuggestions = node.suggestions;
            this.displaySuggestions(node.suggestions);
        }
        this.updateExploredList();
    }

    getExploredPages() {
        // Flatten tree for backward compatibility
        const pages = [];
        const traverse = (node) => {
            pages.push({
                title: node.title,
                pageid: node.pageid,
                extract: node.extract,
                url: node.url,
                links: node.links,
                category: node.category,
                relevance: node.relevance,
                exploredAt: node.visitedAt
            });
            node.children.forEach(child => traverse(child));
        };
        if (this.explorationTree) {
            traverse(this.explorationTree);
        }
        return pages;
    }

    getExploredCount() {
        let count = 0;
        const countNodes = (node) => {
            count++;
            node.children.forEach(child => countNodes(child));
        };
        if (this.explorationTree) {
            countNodes(this.explorationTree);
        }
        return count;
    }

    loadPersistentInterests() {
        try {
            const stored = localStorage.getItem('wikipediaRabbitHoleInterests');
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {}
        return [];
    }

    savePersistentInterests() {
        try {
            localStorage.setItem('wikipediaRabbitHoleInterests', JSON.stringify(this.userBehavior.searchPatterns));
        } catch (e) {}
    }

    initializeEventListeners() {
        // Interest input
        const addInterestBtn = document.getElementById('add-interest-btn');
        const finishBtn = document.getElementById('finish-btn');
        const interestInput = document.getElementById('interest-input');
        const interestTags = () => document.querySelectorAll('.interest-tag');

        addInterestBtn.addEventListener('click', () => {
            this.soundManager.playSound('pop');
            this.addInterest();
        });
        finishBtn.addEventListener('click', () => {
            this.soundManager.playSound('success');
            this.startExploration();
        });
        
        interestInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addInterest();
            }
        });

        // Attach event listeners to quick start tags (dynamic)
        const attachQuickTagListeners = () => {
            interestTags().forEach(tag => {
                tag.addEventListener('click', () => {
                    this.soundManager.playSound('pop');
                    const interest = tag.getAttribute('data-interest');
                    // Parse comma-separated interests and add them as separate tabs
                    const interests = interest.split(',').map(i => i.trim());
                    interests.forEach(interest => this.addInterestTab(interest));
                });
            });
        };
        attachQuickTagListeners();

        // Refresh quick start ideas
        document.getElementById('refresh-quick-btn').addEventListener('click', () => {
            this.soundManager.playSound('sparkle');
            this.refreshQuickStartIdeas();
            attachQuickTagListeners();
        });

        // New journey button
        document.getElementById('new-journey-btn').addEventListener('click', () => {
            this.soundManager.playSound('success');
            this.resetJourney();
        });

        // Try again button
        document.getElementById('try-again-btn').addEventListener('click', () => {
            this.soundManager.playSound('boop');
            this.showSection('interest-section');
        });

        // Modal close
        document.getElementById('close-modal').addEventListener('click', () => {
            this.soundManager.playSound('click');
            this.closeModal(); // Only close, do not refresh suggestions
        });

        // Done button
        document.getElementById('done-btn').addEventListener('click', async () => {
            this.soundManager.playSound('success');
            this.closeModal();
            // Show loading spinner immediately
            this.showSuggestionsLoading(true);
            // Only refresh suggestions here
            if (this.lastOpenedPage) {
                const keywords = this.extractKeywordsFromText(this.lastOpenedPage.extract, 5, this.lastOpenedPage.links);
                const newSuggestions = await this.getSuggestionsFromKeywords(keywords);
                if (newSuggestions.length > 0) {
                    this.currentSuggestions = newSuggestions;
                    this.displaySuggestions(newSuggestions);
                } else {
                    this.showSuggestionsLoading(false);
                }
            } else {
                this.showSuggestionsLoading(false);
            }
        });

        // Close modal on outside click
        document.getElementById('page-modal').addEventListener('click', (e) => {
            if (e.target.id === 'page-modal') {
                this.soundManager.playSound('click');
                this.closeModal();
            }
        });

            // Show personalized interests on page load if there's history
    this.showPersonalizedInterests();

        // Clear All button for For You section
        const clearBtn = document.getElementById('clear-for-you-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.soundManager.playSound('boop');
                this.clearAllPersistentInterests();
            });
        }
    }

    addInterest() {
        const interestInput = document.getElementById('interest-input');
        const interest = interestInput.value.trim();
        
        if (!interest) return;
        
        this.addInterestTab(interest);
        interestInput.value = '';
        interestInput.focus();
    }

    addInterestTab(interest) {
        if (this.interestTabs.includes(interest)) return; // Don't add duplicates
        
        this.interestTabs.push(interest);
        // Save to persistent history if new
        if (!this.userBehavior.searchPatterns.includes(interest)) {
            this.userBehavior.searchPatterns.push(interest);
            this.savePersistentInterests();
        }
        this.updateInterestTabs();
        this.updateFinishButton();
    }

    removeInterestTab(interest) {
        const index = this.interestTabs.indexOf(interest);
        if (index > -1) {
            this.interestTabs.splice(index, 1);
            this.updateInterestTabs();
            this.updateFinishButton();
        }
    }

    updateInterestTabs() {
        const tabsContainer = document.getElementById('interest-tabs');
        tabsContainer.innerHTML = '';
        
        this.interestTabs.forEach(interest => {
            const tab = document.createElement('div');
            tab.className = 'interest-tab';
            tab.innerHTML = `
                <span>${interest}</span>
                <button class="remove-tab">×</button>
            `;
            
            // Add event listener for remove button
            const removeBtn = tab.querySelector('.remove-tab');
            removeBtn.addEventListener('click', () => {
                this.removeInterestTab(interest);
            });
            
            tabsContainer.appendChild(tab);
        });
    }

    updateFinishButton() {
        const finishBtn = document.getElementById('finish-btn');
        finishBtn.disabled = this.interestTabs.length === 0;
    }

    async startExploration() {
        if (this.interestTabs.length === 0) return;

        this.showSection('loading-section');
        this.userInterests = [...this.interestTabs]; // Copy the tabs to user interests
        this.userBehavior.searchPatterns.push(...this.interestTabs);

        try {
            // Get initial suggestions based on the interests
            const suggestions = await this.getInitialSuggestions(this.interestTabs);
            this.currentSuggestions = suggestions;
            this.displaySuggestions(suggestions);
            this.showSection('results-section');
        } catch (error) {
            console.error('Error starting exploration:', error);
            this.showError('Unable to find Wikipedia pages for your interests. Try different search terms.');
        }
    }

    async getInitialSuggestions(interests) {
        const allSuggestions = [];
        
        // Handle both single interest (string) and multiple interests (array)
        const interestArray = Array.isArray(interests) ? interests : [interests];
        
        for (const interest of interestArray) {
            // Search for Wikipedia pages related to the interest
            const searchResults = await this.searchWikipedia(interest);
            
            if (searchResults && searchResults.length > 0) {
                // Get detailed information for the top results
                for (let i = 0; i < Math.min(4, searchResults.length); i++) {
                    const page = searchResults[i];
                    const details = await this.getPageDetails(page.pageid);
                    if (details) {
                        allSuggestions.push({
                            ...details,
                            relevance: this.calculateMultiInterestRelevance(details, interestArray),
                            category: this.categorizePage(details),
                            primaryInterest: interest
                        });
                    }
                }
            }
        }

        if (allSuggestions.length === 0) {
            throw new Error('No results found');
        }

        // Sort by relevance and remove duplicates
        const uniqueSuggestions = allSuggestions.filter((suggestion, index, self) => 
            index === self.findIndex(s => s.pageid === suggestion.pageid)
        );
        
        return uniqueSuggestions.sort((a, b) => b.relevance - a.relevance).slice(0, 6);
    }

    async searchWikipedia(query) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*&srlimit=10`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.query && data.query.search) {
            return data.query.search;
        }
        return [];
    }

    async getPageDetails(pageId) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|info|links&pageids=${pageId}&format=json&origin=*&inprop=url&exintro=1&explaintext=1&pllimit=20`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.query && data.query.pages && data.query.pages[pageId]) {
            const page = data.query.pages[pageId];
            return {
                pageid: page.pageid,
                title: page.title,
                extract: page.extract || 'No description available.',
                url: page.fullurl,
                links: page.links || [],
                categories: page.categories || []
            };
        }
        return null;
    }

    calculateMultiInterestRelevance(page, interests) {
        const titleWords = page.title.toLowerCase().split(' ');
        const extractWords = page.extract.toLowerCase().split(' ');
        
        let totalScore = 0;
        
        interests.forEach(interest => {
            const interestWords = interest.toLowerCase().split(' ');
            let score = 0;
            
            // Title match
            interestWords.forEach(word => {
                if (titleWords.some(titleWord => titleWord.includes(word))) {
                    score += 3;
                }
            });
            
            // Extract match
            interestWords.forEach(word => {
                const matches = extractWords.filter(extractWord => extractWord.includes(word)).length;
                score += matches * 0.5;
            });
            
            totalScore += score;
        });
        
        return Math.min(totalScore, 10); // Cap at 10
    }

    calculateRelevance(page, interest) {
        return this.calculateMultiInterestRelevance(page, [interest]);
    }

    categorizePage(page) {
        const title = page.title.toLowerCase();
        const extract = page.extract.toLowerCase();
        
        const categories = {
            'science': ['physics', 'chemistry', 'biology', 'mathematics', 'astronomy', 'geology'],
            'history': ['history', 'ancient', 'medieval', 'war', 'battle', 'empire', 'dynasty'],
            'arts': ['art', 'music', 'literature', 'painting', 'sculpture', 'theater', 'film'],
            'technology': ['computer', 'software', 'internet', 'programming', 'artificial intelligence', 'robot'],
            'geography': ['country', 'city', 'river', 'mountain', 'ocean', 'continent'],
            'philosophy': ['philosophy', 'ethics', 'logic', 'metaphysics', 'epistemology'],
            'politics': ['politics', 'government', 'election', 'president', 'parliament', 'democracy']
        };
        
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some(keyword => title.includes(keyword) || extract.includes(keyword))) {
                return category;
            }
        }
        
        return 'general';
    }

    displaySuggestions(suggestions) {
        const suggestionsList = document.getElementById('suggestions-list');
        const activeInterests = document.getElementById('active-interests');
        
        suggestionsList.innerHTML = '';
        
        // Show active interests
        activeInterests.innerHTML = '';
        this.userInterests.forEach(interest => {
            const tag = document.createElement('span');
            tag.className = 'active-interest-tag';
            tag.textContent = interest;
            activeInterests.appendChild(tag);
        });
        
        suggestions.forEach(suggestion => {
            const card = this.createSuggestionCard(suggestion);
            suggestionsList.appendChild(card);
        });
    }

    async createSuggestionCard(suggestion) {
        const card = document.createElement('div');
        card.className = 'suggestion-card';
        card.dataset.pageid = suggestion.pageid;
        
        const relevance = Math.round(suggestion.relevance * 10);
        
        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'suggestion-image-container';
        imageContainer.innerHTML = '<div class="suggestion-image-loading">Loading...</div>';
        
        card.innerHTML = `
            <div class="relevance">${relevance}% match</div>
            <h4>${suggestion.title}</h4>
        `;
        
        // Add image container to card
        card.appendChild(imageContainer);
        
        // Load image for the card
        this.loadImageForSuggestion(suggestion, imageContainer);
        
        card.addEventListener('click', () => {
            this.soundManager.playSound('click');
            this.openPage(suggestion);
        });
        
        return card;
    }

    async loadImageForSuggestion(suggestion, container) {
        try {
            // Try Wikipedia lead image first
            const wikiRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(suggestion.title)}`);
            if (wikiRes.ok) {
                const data = await wikiRes.json();
                if (data.thumbnail && data.thumbnail.source) {
                    container.innerHTML = `<img src="${data.thumbnail.source}" alt="${suggestion.title}" class="suggestion-image" />`;
                    return;
                }
            }
        } catch (e) {}
        
        // If no Wikipedia image, try Pexels
        try {
            const pexelsRes = await fetch(`https://api.pexels.com/videos/search?query=${encodeURIComponent(suggestion.title)}&per_page=1`, {
                headers: { Authorization: '563492ad6f91700001000001YOUR_PEXELS_API_KEY' }
            });
            if (pexelsRes.ok) {
                const data = await pexelsRes.json();
                if (data.videos && data.videos.length > 0) {
                    const videoUrl = data.videos[0].video_files.find(f => f.quality === 'sd' || f.quality === 'hd')?.link || data.videos[0].video_files[0]?.link;
                    if (videoUrl) {
                        container.innerHTML = `<video src="${videoUrl}" class="suggestion-video" muted loop />`;
                        return;
                    }
                }
            }
        } catch (e) {}
        
        // If no image found, show a placeholder
        container.innerHTML = '<div class="suggestion-no-image">📚</div>';
    }

    updateExploreCounter() {
        const count = this.getExploredCount();
        const counter = document.getElementById('explore-count');
        if (counter) counter.textContent = count;
    }

    async openPage(page) {
        // Track user behavior
        this.userBehavior.clickedTopics.push({
            title: page.title,
            category: page.category,
            timestamp: Date.now()
        });
        // Add to tree
        this.addToTree(page, page);
        // Show page content in modal
        this.lastOpenedPage = page;
        this.showPageModal(page);
        // (No suggestion refresh here!)
    }

    extractKeywordsFromText(text, count = 5, links = []) {
        // 1. Use Wikipedia links if available (they are usually entities/terms)
        const linkTitles = Array.isArray(links) && links.length > 0
            ? links.map(link => link.title).filter(Boolean)
            : [];
        const uniqueLinks = Array.from(new Set(linkTitles));
        if (uniqueLinks.length >= count) {
            return uniqueLinks.slice(0, count);
        }

        // 2. Extract multi-word capitalized phrases (likely proper nouns/terms)
        const multiWordEntities = [];
        const multiWordRegex = /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/g;
        let match;
        while ((match = multiWordRegex.exec(text)) !== null) {
            multiWordEntities.push(match[1]);
        }
        const uniqueMultiWord = Array.from(new Set(multiWordEntities));

        // 3. Extract capitalized single words (not at start of sentence)
        const singleWordEntities = [];
        const singleWordRegex = /(?<![.!?]\s)(?<!^)(\b[A-Z][a-z]{2,}\b)/g;
        while ((match = singleWordRegex.exec(text)) !== null) {
            singleWordEntities.push(match[1]);
        }
        const uniqueSingleWord = Array.from(new Set(singleWordEntities));

        // 4. Combine all entities, prioritizing links, then multi-word, then single-word
        const allEntities = [
            ...uniqueLinks,
            ...uniqueMultiWord.filter(e => !uniqueLinks.includes(e)),
            ...uniqueSingleWord.filter(e => !uniqueLinks.includes(e) && !uniqueMultiWord.includes(e))
        ];
        if (allEntities.length >= count) {
            return allEntities.slice(0, count);
        }

        // 5. Fallback: use most frequent non-stopword words
        const stopwords = new Set([
            'the','and','for','are','with','that','this','from','was','but','not','have','has','had','you','his','her','she','him','they','their','them','its','who','what','when','where','why','how','which','will','would','can','could','should','may','might','been','were','also','into','than','then','about','after','before','over','under','between','during','such','these','those','because','while','each','other','more','most','some','any','all','one','two','three','four','five','first','second','third','new','used','use','using','many','much','very','just','like','so','if','on','in','at','by','to','of','as','is','it','an','or','be','a','we','our','us','do','does','did','no','yes','up','out','off','per','via','etc','i','me','my','your','yours','he','his','her','hers','theirs','ours','you','your','yours','itself','themselves','himself','herself','myself','ourselves','yourself','yourselves','it’s','let','let’s','see','see also','see:','see also:'
        ]);
        const words = text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .split(/\s+/)
            .filter(word => word.length > 2 && !stopwords.has(word));
        const freq = {};
        for (const word of words) {
            freq[word] = (freq[word] || 0) + 1;
        }
        const sorted = Object.entries(freq)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(([word]) => word);
        return [...allEntities, ...sorted].slice(0, count);
    }

    async getSuggestionsFromKeywords(keywords) {
        const suggestions = [];
        const seenPageIds = new Set(this.getExploredPages().map(p => p.pageid));
        for (const keyword of keywords) {
            const searchResults = await this.searchWikipedia(keyword);
            for (const result of searchResults) {
                if (!seenPageIds.has(result.pageid) && !suggestions.some(s => s.pageid === result.pageid)) {
                    const details = await this.getPageDetails(result.pageid);
                    if (details) {
                        suggestions.push({
                            ...details,
                            relevance: 10, // Always 10 for direct keyword match
                            category: this.categorizePage(details)
                        });
                        break; // Only take the top result for each keyword
                    }
                }
            }
            if (suggestions.length >= 5) break;
        }
        return suggestions.slice(0, 5);
    }

    // Fetch and show a video or image for the passage
    async showModalImageForPage(page) {
        const img = document.getElementById('modal-image');
        const video = document.getElementById('modal-video');
        const loading = document.getElementById('modal-image-loading');
        if (!img || !video || !loading) return;
        img.style.display = 'none';
        video.style.display = 'none';
        loading.classList.remove('hidden');
        let loaded = false;
        // 1. Try Pexels video API (demo: public endpoint, but you can add your API key for more results)
        try {
            const pexelsRes = await fetch(`https://api.pexels.com/videos/search?query=${encodeURIComponent(page.title)}&per_page=1`, {
                headers: { Authorization: '563492ad6f91700001000001YOUR_PEXELS_API_KEY' } // Replace with your Pexels API key
            });
            if (pexelsRes.ok) {
                const data = await pexelsRes.json();
                if (data.videos && data.videos.length > 0) {
                    const videoUrl = data.videos[0].video_files.find(f => f.quality === 'sd' || f.quality === 'hd')?.link || data.videos[0].video_files[0]?.link;
                    if (videoUrl) {
                        video.src = videoUrl;
                        video.style.display = 'block';
                        loading.classList.add('hidden');
                        loaded = true;
                        return;
                    }
                }
            }
        } catch (e) {}
        // 2. Try Wikipedia lead image
        try {
            const wikiRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page.title)}`);
            if (wikiRes.ok) {
                const data = await wikiRes.json();
                if (data.thumbnail && data.thumbnail.source) {
                    img.src = data.thumbnail.source;
                    img.alt = page.title + ' - related visual';
                    img.style.display = 'block';
                    loading.classList.add('hidden');
                    loaded = true;
                    return;
                }
            }
        } catch (e) {}
        // 3. Fallback: show nothing
        img.style.display = 'none';
        video.style.display = 'none';
        loading.classList.add('hidden');
    }

    async showPageModal(page) {
        const modal = document.getElementById('page-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        const wikipediaLink = document.getElementById('wikipedia-link');
        
        modalTitle.textContent = page.title;

        // Use the summarized passage text in the modal
        let passage = this.summarizePassage(page.extract);
        let clickableCount = 0;
        let alreadyHighlighted = new Set();
        if (Array.isArray(page.links) && page.links.length > 0) {
            // Sort by length descending to avoid partial overlaps
            const sortedLinks = [...page.links]
                .map(link => link.title)
                .filter(Boolean)
                .sort((a, b) => b.length - a.length);
            // Replace each link title in the passage with a clickable span, case-insensitive
            sortedLinks.forEach(keyword => {
                if (alreadyHighlighted.has(keyword.toLowerCase())) return;
                const safeKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = keyword.includes(' ')
                    ? new RegExp(safeKeyword, 'i')
                    : new RegExp('\\b' + safeKeyword + '\\b', 'i');
                passage = passage.replace(regex, match => {
                    clickableCount++;
                    alreadyHighlighted.add(keyword.toLowerCase());
                    return `<span class=\"keyword-link\" data-keyword=\"${encodeURIComponent(keyword)}\">${match}</span>`;
                });
            });
        }
        // Fallback: If not enough clickable links, extract up to 7 keywords/entities and make them clickable
        if (clickableCount < 3) {
            let fallbackKeywords = this.extractKeywordsFromText(page.extract, 12); // get more, filter below
            // Filter out generic/short words and already highlighted
            fallbackKeywords = fallbackKeywords.filter(word => word.length > 3 && !alreadyHighlighted.has(word.toLowerCase()) && !['art','arts','music','the','and','for','with','that','this','from','was','but','not','have','has','had','you','his','her','she','him','they','their','them','its','who','what','when','where','why','how','which','will','would','can','could','should','may','might','been','were','also','into','than','then','about','after','before','over','under','between','during','such','these','those','because','while','each','other','more','most','some','any','all','one','two','three','four','five','first','second','third','new','used','use','using','many','much','very','just','like','so','if','on','in','at','by','to','of','as','is','it','an','or','be','a','we','our','us','do','does','did','no','yes','up','out','off','per','via','etc','i','me','my','your','yours','he','his','her','hers','theirs','ours','you','your','yours','itself','themselves','himself','herself','myself','ourselves','yourself','yourselves','it’s','let','let’s','see','see also','see:','see also:'].includes(word.toLowerCase()));
            // Sort by length and rarity (longer and less frequent first)
            fallbackKeywords = [...new Set(fallbackKeywords)].sort((a, b) => b.length - a.length);
            let fallbackAdded = 0;
            for (const keyword of fallbackKeywords) {
                if (fallbackAdded >= 7) break;
                const safeKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = keyword.includes(' ')
                    ? new RegExp(safeKeyword, 'i')
                    : new RegExp('\\b' + safeKeyword + '\\b', 'i');
                if (passage.match(regex)) {
                    passage = passage.replace(regex, match => `<span class=\"keyword-link\" data-keyword=\"${encodeURIComponent(keyword)}\">${match}</span>`);
                    alreadyHighlighted.add(keyword.toLowerCase());
                    fallbackAdded++;
                }
            }
        }

        modalContent.innerHTML = `
            <h1>${page.title}</h1>
            <p>${passage}</p>
            ${page.extract.length > 500 ? '<p>...</p>' : ''}
        `;
        wikipediaLink.href = page.url;
        modal.classList.remove('hidden');

        // Add click listeners to keyword links
        modalContent.querySelectorAll('.keyword-link').forEach(el => {
            el.addEventListener('click', async (e) => {
                const keyword = decodeURIComponent(el.getAttribute('data-keyword'));
                // Fetch Wikipedia page for the keyword
                const searchResults = await this.searchWikipedia(keyword);
                if (searchResults && searchResults.length > 0) {
                    const details = await this.getPageDetails(searchResults[0].pageid);
                    if (details) {
                        this.openPage(details);
                    }
                }
            });
        });

        // Always show the image after rendering the passage
        await this.showModalImageForPage(page);
    }

    closeModal() {
        document.getElementById('page-modal').classList.add('hidden');
    }

    // Show/hide suggestions loading spinner
    showSuggestionsLoading(show) {
        const loading = document.getElementById('suggestions-loading');
        if (loading) loading.classList.toggle('hidden', !show);
    }

    // Wrap displaySuggestions to hide spinner after rendering
    async displaySuggestions(suggestions) {
        this.showSuggestionsLoading(false);
        const suggestionsList = document.getElementById('suggestions-list');
        const activeInterests = document.getElementById('active-interests');
        suggestionsList.innerHTML = '';
        // Show active interests
        activeInterests.innerHTML = '';
        this.userInterests.forEach(interest => {
            const tag = document.createElement('span');
            tag.className = 'active-interest-tag';
            tag.textContent = interest;
            activeInterests.appendChild(tag);
        });
        
        // Create cards asynchronously
        for (const suggestion of suggestions) {
            const card = await this.createSuggestionCard(suggestion);
            suggestionsList.appendChild(card);
        }
    }

    // Show spinner when refreshing suggestions
    async generateNewSuggestions() {
        if (this.getExploredCount() < 2) return; // Need at least 2 pages to learn from
        this.showSuggestionsLoading(true);
        try {
            // Analyze user behavior to find patterns
            const userPreferences = this.analyzeUserBehavior();
            // Get related pages based on user preferences, but stay focused on original interests
            const newSuggestions = await this.getRelatedSuggestions(userPreferences);
            if (newSuggestions.length > 0) {
                this.currentSuggestions = newSuggestions;
                this.displaySuggestions(newSuggestions);
            } else {
                this.showSuggestionsLoading(false);
            }
        } catch (error) {
            this.showSuggestionsLoading(false);
            console.error('Error generating new suggestions:', error);
        }
    }

    analyzeUserBehavior() {
        const preferences = {
            categories: {},
            topics: {},
            timePatterns: {}
        };
        
        // Analyze clicked topics
        this.userBehavior.clickedTopics.forEach(topic => {
            preferences.categories[topic.category] = (preferences.categories[topic.category] || 0) + 1;
            preferences.topics[topic.title] = (preferences.topics[topic.title] || 0) + 1;
        });
        
        // Find most preferred categories, but be more conservative
        const topCategories = Object.entries(preferences.categories)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 2) // Reduced from 3 to 2 to be more focused
            .map(([category]) => category);
        
        return {
            preferredCategories: topCategories,
            preferredTopics: Object.keys(preferences.topics).slice(0, 3), // Reduced from 5 to 3
            searchHistory: this.userBehavior.searchPatterns
        };
    }

    async getRelatedSuggestions(userPreferences) {
        const suggestions = [];
        
        // Prioritize original interests and clicked topics over general categories
        const priorityTopics = [
            ...this.userInterests, // Original interests
            ...userPreferences.preferredTopics.slice(0, 5), // Most clicked topics
            ...userPreferences.searchHistory.slice(-3) // Recent searches
        ];
        
        // Remove duplicates from priority topics
        const uniquePriorityTopics = [...new Set(priorityTopics)];
        
        // Get suggestions based on priority topics (original interests and clicked topics)
        for (const topic of uniquePriorityTopics) {
            const topicPages = await this.searchWikipedia(topic);
            for (let i = 0; i < Math.min(2, topicPages.length); i++) {
                const page = topicPages[i];
                const details = await this.getPageDetails(page.pageid);
                if (details && !this.isAlreadyExplored(details.pageid)) {
                    suggestions.push({
                        ...details,
                        relevance: this.calculateMultiInterestRelevance(details, this.userInterests),
                        category: this.categorizePage(details)
                    });
                }
            }
        }
        
        // Only if we don't have enough suggestions, add category-based suggestions
        if (suggestions.length < 4) {
            for (const category of userPreferences.preferredCategories) {
                const categoryPages = await this.searchWikipedia(category);
                for (let i = 0; i < Math.min(1, categoryPages.length); i++) {
                    const page = categoryPages[i];
                    const details = await this.getPageDetails(page.pageid);
                    if (details && !this.isAlreadyExplored(details.pageid)) {
                        suggestions.push({
                            ...details,
                            relevance: this.calculateMultiInterestRelevance(details, this.userInterests),
                            category: this.categorizePage(details)
                        });
                    }
                }
            }
        }
        
        // Remove duplicates and sort by relevance
        const uniqueSuggestions = suggestions.filter((suggestion, index, self) => 
            index === self.findIndex(s => s.pageid === suggestion.pageid)
        );
        
        return uniqueSuggestions
            .sort((a, b) => b.relevance - a.relevance)
            .slice(0, 6);
    }

    isAlreadyExplored(pageId) {
        const pages = this.getExploredPages();
        return pages.some(page => page.pageid === pageId);
    }

    // Remove updateProgress and its calls
    // updateProgress() {}

    updateExploredList() {
        const exploredList = document.getElementById('explored-list');
        exploredList.innerHTML = '';
        
        if (!this.explorationTree) return;
        
        // Render as SVG tree
        this.renderExplorationTreeSVG(exploredList);
    }

    // --- SVG Tree Rendering ---
    renderExplorationTreeSVG(container) {
        // Tree layout constants
        const minNodeWidth = 180;
        const nodeHeight = 40;
        const hGap = 40; // horizontal gap between siblings
        const vGap = 60; // vertical gap between levels
        const boxPadding = 24; // px padding left/right inside box

        // Helper to measure text width (SVG)
        function measureText(text, fontSize = 15, fontWeight = 'bold', fontFamily = 'Inter, Arial, sans-serif') {
            const svgNS = 'http://www.w3.org/2000/svg';
            const tempSvg = document.createElementNS(svgNS, 'svg');
            const tempText = document.createElementNS(svgNS, 'text');
            tempText.setAttribute('font-size', fontSize);
            tempText.setAttribute('font-weight', fontWeight);
            tempText.setAttribute('font-family', fontFamily);
            tempText.textContent = text;
            tempSvg.appendChild(tempText);
            document.body.appendChild(tempSvg);
            const width = tempText.getBBox().width;
            document.body.removeChild(tempSvg);
            return width;
        }

        // Step 1: Traverse tree and assign x/y positions (vertical, centrally aligned, dynamic spacing)
        let nodes = [];
        let links = [];
        let maxDepth = 0;

        // Recursive layout: returns {x, width} for the subtree
        function layout(node, depth, xOffset) {
            maxDepth = Math.max(maxDepth, depth);
            let titleWidth = Math.ceil(measureText(node.title)) + boxPadding * 2;
            let nodeWidth = Math.max(minNodeWidth, titleWidth);
            let children = [];
            let suggestions = [];
            let totalWidth = 0;
            let childX = xOffset;
            // Layout children
            node.children.forEach(child => {
                const childLayout = layout(child, depth + 1, childX);
                children.push(childLayout);
                childX += childLayout.width + hGap;
                totalWidth += childLayout.width + hGap;
            });
            // Layout suggestions
            node.suggestions.forEach(sugg => {
                let suggTitleWidth = Math.ceil(measureText(sugg.title)) + boxPadding * 2;
                let suggNodeWidth = Math.max(minNodeWidth, suggTitleWidth);
                suggestions.push({
                    ...sugg,
                    isSuggestion: true,
                    x: childX,
                    y: (depth + 1) * (nodeHeight + vGap),
                    width: suggNodeWidth
                });
                childX += suggNodeWidth + hGap;
                totalWidth += suggNodeWidth + hGap;
            });
            if (totalWidth > 0) totalWidth -= hGap; // Remove last gap
            // Center this node above its children
            let myX;
            if (children.length + suggestions.length > 0) {
                const firstChild = children[0] || suggestions[0];
                const lastChild = (suggestions.length > 0 ? suggestions[suggestions.length - 1] : children[children.length - 1]);
                const left = firstChild ? firstChild.x : suggestions[0].x;
                const right = lastChild ? (lastChild.x + (lastChild.width || minNodeWidth)) : (suggestions[0].x + suggestions[0].width);
                myX = left + (right - left) / 2 - nodeWidth / 2;
            } else {
                myX = xOffset;
                totalWidth = nodeWidth;
            }
            // Add node
            nodes.push({
                ...node,
                isSuggestion: false,
                x: myX,
                y: depth * (nodeHeight + vGap),
                width: nodeWidth
            });
            // Add children and suggestions to nodes
            children.forEach(child => nodes.push(...nodes.filter(n => n.pageid === child.pageid && !n.isSuggestion)));
            suggestions.forEach(sugg => nodes.push(sugg));
            return { x: myX, width: totalWidth || nodeWidth, pageid: node.pageid };
        }
        nodes = [];
        layout(this.explorationTree, 0, 0);
        // Remove duplicate nodes
        nodes = nodes.filter((n, i, arr) => arr.findIndex(m => m.x === n.x && m.y === n.y && m.title === n.title) === i);

        // Add links (orthogonal)
        function addLinks(node) {
            const parentNode = nodes.find(n => n.pageid === node.pageid && !n.isSuggestion);
            const parentX = parentNode.x + (parentNode.width || minNodeWidth) / 2;
            const parentY = parentNode.y + nodeHeight;
            // Children
            node.children.forEach(child => {
                const childNode = nodes.find(n => n.pageid === child.pageid && !n.isSuggestion);
                const childX = childNode.x + (childNode.width || minNodeWidth) / 2;
                const childY = childNode.y;
                links.push({
                    path: [
                        { x: parentX, y: parentY },
                        { x: parentX, y: childY - vGap / 2 },
                        { x: childX, y: childY - vGap / 2 },
                        { x: childX, y: childY }
                    ]
                });
                addLinks(child);
            });
            // Suggestions
            node.suggestions.forEach(sugg => {
                const suggNode = nodes.find(n => n.isSuggestion && n.title === sugg.title && n.y === (parentNode.y + nodeHeight + vGap));
                if (!suggNode) return;
                const suggX = suggNode.x + (suggNode.width || minNodeWidth) / 2;
                const suggY = suggNode.y;
                links.push({
                    path: [
                        { x: parentX, y: parentY },
                        { x: parentX, y: suggY - vGap / 2 },
                        { x: suggX, y: suggY - vGap / 2 },
                        { x: suggX, y: suggY }
                    ]
                });
            });
        }
        links = [];
        addLinks(this.explorationTree);

        // Step 4: Create SVG
        const maxX = Math.max(...nodes.map(n => n.x + (n.width || minNodeWidth)));
        const width = Math.max(1, maxX + minNodeWidth);
        const height = (maxDepth + 2) * (nodeHeight + vGap);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.style.overflow = 'visible';
        svg.style.display = 'block';
        svg.style.margin = '0 auto';

        // Draw links (orthogonal)
        links.forEach(link => {
            for (let i = 0; i < link.path.length - 1; i++) {
                const from = link.path[i];
                const to = link.path[i + 1];
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', from.x);
                line.setAttribute('y1', from.y);
                line.setAttribute('x2', to.x);
                line.setAttribute('y2', to.y);
                line.setAttribute('stroke', '#bbb');
                line.setAttribute('stroke-width', '2');
                svg.appendChild(line);
            }
        });

        // Draw nodes (title only)
        nodes.forEach(node => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('transform', `translate(${node.x},${node.y})`);
            // Node box
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', node.width || minNodeWidth);
            rect.setAttribute('height', nodeHeight);
            rect.setAttribute('rx', 12);
            rect.setAttribute('ry', 12);
            if (node.isSuggestion) {
                rect.setAttribute('fill', '#f5f5f5');
                rect.setAttribute('stroke', '#bdbdbd');
            } else if (this.currentNode && node.pageid === this.currentNode.pageid) {
                rect.setAttribute('fill', '#e0f7fa');
                rect.setAttribute('stroke', '#00bcd4');
                rect.setAttribute('stroke-width', '3');
            } else {
                rect.setAttribute('fill', '#fff');
                rect.setAttribute('stroke', '#90caf9');
            }
            g.appendChild(rect);
            // Title only
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            title.setAttribute('x', (node.width || minNodeWidth) / 2);
            title.setAttribute('y', nodeHeight / 2 + 6);
            title.setAttribute('text-anchor', 'middle');
            title.setAttribute('font-size', '15');
            title.setAttribute('font-weight', 'bold');
            title.setAttribute('fill', '#333');
            title.textContent = node.title;
            g.appendChild(title);
            // Click handler
            g.style.cursor = 'pointer';
            g.addEventListener('click', (e) => {
                e.stopPropagation();
                this.soundManager.playSound('click');
                if (node.isSuggestion) {
                    this.openPage(node);
                } else {
                    this.goBackToNode(node);
                }
            });
            svg.appendChild(g);
        });

        container.appendChild(svg);
    }

    resetJourney() {
        this.explorationTree = null;
        this.currentNode = null;
        this.currentSuggestions = [];
        this.interestTabs = [];
        this.userBehavior.clickedTopics = [];
        this.userBehavior.timeSpent = {};
        // Do NOT clear searchPatterns here!
        document.getElementById('interest-input').value = '';
        this.updateInterestTabs();
        this.updateFinishButton();
        this.showSection('interest-section');
        this.updateExploreCounter();
        this.updateExploredList();
        this.showPersonalizedInterests();
    }

    showPersonalizedInterests() {
        const forYouSection = document.getElementById('for-you-section');
        const forYouTags = document.getElementById('for-you-tags');
        
        // Get unique past interests from search patterns
        const pastInterests = [...new Set(this.userBehavior.searchPatterns)];
        
        forYouTags.innerHTML = '';
        if (pastInterests.length > 0) {
            pastInterests.forEach(interest => {
                const tag = document.createElement('span');
                tag.className = 'interest-tag for-you-tag';
                tag.textContent = interest;
                tag.addEventListener('click', (e) => {
                    // Only add if not clicking the remove button
                    if (e.target.classList.contains('remove-for-you')) return;
                    this.soundManager.playSound('pop');
                    this.addInterestTab(interest);
                });
                // Add remove button
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-for-you';
                removeBtn.innerHTML = '&times;';
                removeBtn.title = 'Remove from history';
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.soundManager.playSound('boop');
                    this.removePersistentInterest(interest);
                });
                tag.appendChild(removeBtn);
                forYouTags.appendChild(tag);
            });
        } else {
            // Show friendly message if no tabs
            const msg = document.createElement('div');
            msg.className = 'for-you-empty-msg';
            msg.textContent = 'No For You tabs at the moment.';
            forYouTags.appendChild(msg);
        }
        forYouSection.classList.remove('hidden');
    }

    removePersistentInterest(interest) {
        this.userBehavior.searchPatterns = this.userBehavior.searchPatterns.filter(i => i !== interest);
        this.savePersistentInterests();
        this.showPersonalizedInterests();
    }

    clearAllPersistentInterests() {
        this.userBehavior.searchPatterns = [];
        this.savePersistentInterests();
        this.showPersonalizedInterests();
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Show the target section
        document.getElementById(sectionId).classList.remove('hidden');
    }

    showError(message) {
        document.getElementById('error-message').textContent = message;
        this.showSection('error-section');
    }

    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    // Summarize Wikipedia passages to be more kid-friendly and concise
    summarizePassage(text) {
        // Remove citations and references
        let cleaned = text.replace(/\[\d+\]/g, '').replace(/\[citation needed\]/gi, '');
        
        // Split into sentences
        const sentences = cleaned.split(/[.!?]+/).filter(s => s.trim().length > 0);
        
        // Find a natural ending point within the first few sentences
        let summary = '';
        let totalLength = 0;
        
        for (let i = 0; i < Math.min(4, sentences.length); i++) {
            const sentence = sentences[i].trim();
            if (sentence.length === 0) continue;
            
            // Add the sentence
            summary += (summary ? '. ' : '') + sentence;
            totalLength += sentence.length;
            
            // Stop if we have a good summary (2-3 sentences, or if adding more would make it too long)
            if (i >= 1 && (totalLength > 200 || i >= 2)) {
                break;
            }
        }
        
        // Ensure proper punctuation
        if (!summary.endsWith('.') && !summary.endsWith('!') && !summary.endsWith('?')) {
            summary += '.';
        }
        
        return summary;
    }

    refreshQuickStartIdeas() {
        const pool = [
            'Quantum Physics','Ancient Rome','Jazz Music','Space Exploration','AI','Medieval History','Marine Biology','Philosophy',
            'Space & Planets','Roman Empire','Jazz & Blues','World War II','Genetics','Dinosaurs','Cryptography','Greek Mythology',
            'Black Holes','Climate Change','Nanotechnology','Shakespeare','Mount Everest','Deep Sea Creatures','Neuroscience',
            'Internet Memes','Futurism','Robotics','Evolution','Human Brain','Solar System','Vikings','World Religions',
            'Great Wall of China','Leonardo da Vinci','Mona Lisa','Blockchain','Cybersecurity','Astrobiology','Ancient Egypt',
            'Renaissance Art','String Theory','Game Theory','Probability','Mammals','Bird Migration','Coral Reefs','Volcanoes',
            'Artificial Life','Mars Exploration','Turing Machines','Cognitive Science','Paleontology','Sailing Ships','Opera',
            'Photography','World Literature','Fossils','Ecosystems','Inventions','Space Telescopes','Marine Mammals','Epidemiology',
            'Particle Physics','Nobel Prize','Internet History','Ancient Greece','Roman Gladiators','Jazz Age','World Fairs',
            'Space Race','Apollo Missions','Genetic Engineering','Philosophers','Logic Puzzles','Ancient Astronomy','Cave Paintings',
            'Human Evolution','Socrates','Plato','Aristotle','Isaac Newton','Marie Curie','Ada Lovelace','Alan Turing',
            'Charles Darwin','Captain James Cook','Age of Discovery','Naturalists','Specimens','Sound Ranging','Marine Biologists'
        ];
        
        // Generate AI recommendations based on user data
        const aiRecommendations = this.generateAIRecommendations();
        
        // If no AI recommendations, just show random pool topics
        if (aiRecommendations.length === 0) {
            const shuffled = pool.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 10).map(topic => ({
                text: topic,
                isAI: false,
                confidence: 0.5
            }));
            
            this.displayQuickStartTopics(selected);
        } else {
            // Mix AI recommendations with random pool topics
            const selected = this.mixRecommendations(aiRecommendations, pool);
            this.displayQuickStartTopics(selected);
        }
    }

    displayQuickStartTopics(topics) {
        const quickTags = document.getElementById('quick-tags');
        quickTags.innerHTML = '';
        
        topics.forEach(topic => {
            const tag = document.createElement('span');
            tag.className = 'interest-tag';
            tag.setAttribute('data-interest', topic.text);
            tag.textContent = topic.text;
            
            // Add special styling for AI recommendations
            if (topic.isAI) {
                tag.classList.add('ai-recommendation');
            }
            
            // Add click event listener
            tag.addEventListener('click', () => {
                this.addInterestTab(topic.text);
            });
            
            quickTags.appendChild(tag);
        });
    }

    generateAIRecommendations() {
        const recommendations = [];
        
        // Get the same recommendations that appear in "Recommended Based on Your Interests"
        const recommendedSection = document.getElementById('recommended-section');
        if (recommendedSection && !recommendedSection.classList.contains('hidden')) {
            const recommendedTags = document.getElementById('recommended-tags');
            const recommendedTopics = Array.from(recommendedTags.querySelectorAll('.interest-tag'))
                .map(tag => tag.textContent);
            
            // Convert recommended topics to AI recommendations
            recommendedTopics.forEach(topic => {
                recommendations.push({
                    text: topic,
                    isAI: true,
                    confidence: 0.9
                });
            });
        }
        
        // If no quiz recommendations, fall back to For You history analysis
        if (recommendations.length === 0) {
            const forYouHistory = this.userBehavior.searchPatterns;
            if (forYouHistory.length > 0) {
                recommendations.push(...this.analyzeForYouHistory(forYouHistory));
            }
        }
        
        return recommendations.slice(0, 5);
    }

    getQuizAnswers() {
        // Try to get quiz answers from localStorage or session
        try {
            const stored = localStorage.getItem('wikipediaRabbitHoleQuizAnswers');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            return [];
        }
    }

    analyzeQuizAnswers(answers) {
        const recommendations = [];
        
        // Simple keyword-based analysis
        const keywords = this.extractKeywordsFromAnswers(answers);
        
        // Map keywords to related topics
        const topicMappings = {
            'science': ['Quantum Physics', 'Neuroscience', 'Astrobiology', 'Particle Physics'],
            'history': ['Ancient Rome', 'Medieval History', 'World War II', 'Ancient Greece'],
            'art': ['Renaissance Art', 'Photography', 'Shakespeare', 'Mona Lisa'],
            'music': ['Jazz Music', 'Opera', 'Jazz Age', 'World Literature'],
            'space': ['Space Exploration', 'Black Holes', 'Mars Exploration', 'Solar System'],
            'technology': ['AI', 'Robotics', 'Nanotechnology', 'Blockchain'],
            'nature': ['Marine Biology', 'Climate Change', 'Deep Sea Creatures', 'Coral Reefs'],
            'philosophy': ['Philosophy', 'Socrates', 'Plato', 'Aristotle'],
            'mathematics': ['Game Theory', 'Probability', 'Logic Puzzles', 'String Theory'],
            'biology': ['Genetics', 'Evolution', 'Human Brain', 'Marine Mammals'],
            'geography': ['Mount Everest', 'Volcanoes', 'Great Wall of China', 'Cave Paintings'],
            'invention': ['Inventions', 'Turing Machines', 'Space Telescopes', 'Internet History']
        };
        
        keywords.forEach(keyword => {
            const relatedTopics = topicMappings[keyword.toLowerCase()] || [];
            relatedTopics.forEach(topic => {
                recommendations.push({
                    text: topic,
                    isAI: true,
                    confidence: 0.8
                });
            });
        });
        
        return recommendations;
    }

    analyzeForYouHistory(history) {
        const recommendations = [];
        
        // Find patterns in user's exploration history
        const commonThemes = this.findCommonThemes(history);
        
        // Generate related topics based on themes
        const themeMappings = {
            'space': ['Black Holes', 'Mars Exploration', 'Space Race', 'Apollo Missions'],
            'history': ['Roman Empire', 'Ancient Egypt', 'Vikings', 'Age of Discovery'],
            'science': ['Neuroscience', 'Particle Physics', 'Genetic Engineering', 'Cognitive Science'],
            'art': ['Renaissance Art', 'Photography', 'World Literature', 'Cave Paintings'],
            'music': ['Jazz & Blues', 'Opera', 'Jazz Age', 'World Fairs'],
            'technology': ['AI', 'Robotics', 'Blockchain', 'Cybersecurity'],
            'nature': ['Marine Biology', 'Deep Sea Creatures', 'Bird Migration', 'Coral Reefs'],
            'philosophy': ['Socrates', 'Plato', 'Aristotle', 'Philosophers'],
            'mathematics': ['Game Theory', 'Probability', 'String Theory', 'Logic Puzzles'],
            'biology': ['Genetics', 'Evolution', 'Marine Mammals', 'Paleontology'],
            'geography': ['Mount Everest', 'Volcanoes', 'Great Wall of China', 'Sailing Ships'],
            'invention': ['Inventions', 'Turing Machines', 'Space Telescopes', 'Internet History']
        };
        
        commonThemes.forEach(theme => {
            const relatedTopics = themeMappings[theme] || [];
            relatedTopics.forEach(topic => {
                recommendations.push({
                    text: topic,
                    isAI: true,
                    confidence: 0.9
                });
            });
        });
        
        return recommendations;
    }

    extractKeywordsFromAnswers(answers) {
        const keywords = [];
        const answerText = answers.join(' ').toLowerCase();
        
        // Simple keyword extraction
        const keywordPatterns = [
            'science', 'history', 'art', 'music', 'space', 'technology', 'nature', 'philosophy',
            'mathematics', 'biology', 'geography', 'invention', 'computer', 'math', 'physics',
            'chemistry', 'astronomy', 'geology', 'psychology', 'sociology', 'economics',
            'politics', 'religion', 'culture', 'sports', 'food', 'travel', 'architecture',
            'engineering', 'medicine', 'education', 'business', 'environment', 'climate'
        ];
        
        keywordPatterns.forEach(keyword => {
            if (answerText.includes(keyword)) {
                keywords.push(keyword);
            }
        });
        
        return keywords;
    }

    findCommonThemes(history) {
        const themes = [];
        const historyText = history.join(' ').toLowerCase();
        
        const themePatterns = [
            'space', 'history', 'science', 'art', 'music', 'technology', 'nature', 'philosophy',
            'mathematics', 'biology', 'geography', 'invention'
        ];
        
        themePatterns.forEach(theme => {
            if (historyText.includes(theme)) {
                themes.push(theme);
            }
        });
        
        return themes;
    }

    mixRecommendations(aiRecommendations, pool) {
        const mixed = [];
        
        // Add AI recommendations first
        aiRecommendations.forEach(rec => {
            mixed.push(rec);
        });
        
        // Fill remaining slots with random pool topics
        const remainingSlots = 10 - mixed.length;
        const shuffled = pool.sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < remainingSlots; i++) {
            mixed.push({
                text: shuffled[i],
                isAI: false,
                confidence: 0.5
            });
        }
        
        return mixed;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new WikipediaExplorer();

    // --- Exploration Tree Tab Logic ---
    const treeTab = document.getElementById('exploration-tree-tab');
    const treePanel = document.getElementById('exploration-tree-panel');
    if (treeTab && treePanel) {
        treeTab.addEventListener('click', () => {
            const expanded = treePanel.classList.toggle('expanded');
            treePanel.classList.toggle('collapsed', !expanded);
            treeTab.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });
        // Start collapsed
        treePanel.classList.add('collapsed');
        treePanel.classList.remove('expanded');
        treeTab.setAttribute('aria-expanded', 'false');
    }

    // Quiz logic
    const quizModal = document.getElementById('quiz-modal');
    const quizForm = document.getElementById('quiz-form');
    const openInterestBtn = document.getElementById('open-interest-btn');
    const interestSection = document.getElementById('interest-section');
    if (quizModal && quizForm) {
        quizModal.style.display = 'flex';
        interestSection.style.display = 'none';
        openInterestBtn.style.display = 'block';

        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Extract answers
            const formData = new FormData(quizForm);
            const answers = [
                formData.get('q1'),
                formData.get('q2'),
                formData.get('q3'),
                formData.get('q4'),
                formData.get('q5')
            ].filter(Boolean);
            
            // Store answers for AI analysis
            try {
                localStorage.setItem('wikipediaRabbitHoleQuizAnswers', JSON.stringify(answers));
            } catch (e) {
                console.error('Could not store quiz answers:', e);
            }
            
            // Extract keywords (simple split, could be improved)
            let keywords = [];
            answers.forEach(ans => {
                if (ans) {
                    // Split on commas, and also extract capitalized words/phrases
                    keywords.push(...ans.split(',').map(s => s.trim()));
                    const matches = ans.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/g);
                    if (matches) keywords.push(...matches);
                }
            });
            // Remove duplicates, filter short/generic
            keywords = [...new Set(keywords.map(k => k.trim().toLowerCase()))]
                .filter(k => k.length > 2 && !['and','the','for','with','that','this','from','was','but','not','have','has','had','you','his','her','she','him','they','their','them','its','who','what','when','where','why','how','which','will','would','can','could','should','may','might','been','were','also','into','than','then','about','after','before','over','under','between','during','such','these','those','because','while','each','other','more','most','some','any','all','one','two','three','four','five','first','second','third','new','used','use','using','many','much','very','just','like','so','if','on','in','at','by','to','of','as','is','it','an','or','be','a','we','our','us','do','does','did','no','yes','up','out','off','per','via','etc','i','me','my','your','yours','he','his','her','hers','theirs','ours','you','your','yours','itself','themselves','himself','herself','myself','ourselves','yourself','yourselves','it’s','let','let’s','see','see also','see:','see also:'].includes(k));
            // Generate 5 topics: pick 2 broad, 3 deep (simulate with random for now)
            let topics = [];
            if (keywords.length > 0) {
                // Use the first 2 as broad, and next 3 as deep (or random if not enough)
                topics = keywords.slice(0,2);
                // For deep, append a more specific phrase
                const deepPool = ['advanced', 'dynamics', 'applications', 'history', 'future', 'engineering', 'theory', 'technology', 'society', 'impact'];
                for (let i = 2; i < Math.min(5, keywords.length); i++) {
                    const kw = keywords[i];
                    const deep = kw + ' ' + deepPool[Math.floor(Math.random()*deepPool.length)];
                    topics.push(deep);
                }
                // If not enough, fill with random deep topics
                while (topics.length < 5) {
                    const kw = keywords[Math.floor(Math.random()*keywords.length)];
                    const deep = kw + ' ' + deepPool[Math.floor(Math.random()*deepPool.length)];
                    topics.push(deep);
                }
            } else {
                topics = ['Space Exploration','Marine Biology','Robotics','World History','Music Theory'];
            }
            // Show as clickable tabs in the recommended section
            const recommendedSection = document.getElementById('recommended-section');
            const recommendedTags = document.getElementById('recommended-tags');
            recommendedTags.innerHTML = '';
            if (topics.length > 0) {
                topics.forEach(topic => {
                    const tag = document.createElement('span');
                    tag.className = 'interest-tag';
                    tag.textContent = topic;
                    tag.addEventListener('click', () => {
                        if (!window.wikipediaExplorer || !window.wikipediaExplorer.interestTabs) return;
                        if (!window.wikipediaExplorer.interestTabs.includes(topic)) {
                            window.wikipediaExplorer.addInterestTab(topic);
                        }
                    });
                    recommendedTags.appendChild(tag);
                });
                recommendedSection.classList.remove('hidden');
            } else {
                recommendedSection.classList.add('hidden');
            }
            // Hide quiz, show main input
            quizModal.style.display = 'none';
            interestSection.style.display = '';
            openInterestBtn.style.display = 'none';
            
            // Refresh quick start ideas to include AI recommendations based on quiz
            if (window.wikipediaExplorer) {
                window.wikipediaExplorer.refreshQuickStartIdeas();
            }
        });
    }
    // Show main input if user clicks floating button
    if (openInterestBtn) {
        openInterestBtn.addEventListener('click', () => {
            document.getElementById('quiz-modal').style.display = 'none';
            interestSection.style.display = '';
            openInterestBtn.style.display = 'none';
        });
    }
    // Expose WikipediaExplorer instance for tab adding
    window.wikipediaExplorer = window.wikipediaExplorer || new WikipediaExplorer();
}); 