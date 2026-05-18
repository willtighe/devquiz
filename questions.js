const TRACKS = [

  {
    track: "How It All Works",
    overview: {
      title: "Before You Write a Single Line of Code",
      body: [
        "Most people jump into coding without understanding the world the code lives in. This track fixes that. You'll learn what files actually are, why browsers work the way they do, and why developers use tools that look like they're from the 1980s.",
        "None of this requires you to write code. It's about building a mental model — the map in your head that makes everything else make sense. Once you have it, terms like 'repo', 'server', and 'API' stop being intimidating and start being obvious.",
        "Every developer you admire started here, whether they knew it or not. The ones who understand the foundations are the ones who can debug anything, learn any new tool quickly, and explain what they're doing to anyone."
      ],
      highlight: {
        label: "KEY INSIGHT:",
        text: "Code is just text files. The magic is in understanding which text goes where, and why."
      }
    }
  },

  {
    track: "Terminal & Git",
    overview: {
      title: "The Tools Every Developer Lives In",
      body: [
        "The terminal and Git are not optional extras — they are the environment where almost all professional software development happens. The terminal gives you direct, precise control over your computer: moving files, running programs, installing tools, and automating repetitive tasks with a few keystrokes. Git is the system that makes collaboration possible, letting teams of any size work on the same codebase without overwriting each other's work.",
        "Across the three levels you'll go from confident terminal navigation and basic commits, through branching strategies and remote repositories, to the internals of how Git actually stores data and the power commands that let you rewrite history, recover lost work, and debug regressions automatically. Each level builds directly on the last.",
        "Every developer — regardless of their language, framework, or role — uses these tools daily. Learning them deeply pays compound interest: the faster you can move in a terminal and the more fluently you can read a Git history, the faster you can diagnose problems, onboard to new projects, and ship with confidence."
      ],
      highlight: {
        label: "KEY INSIGHT:",
        text: "Git doesn't just save your work — it makes your entire project history a searchable, reversible, collaborative record that you can navigate like a database."
      }
    }
  },

  {
    track: "VS Code & Claude Code",
    overview: {
      title: "Your Editor Is a Force Multiplier",
      body: [
        "Most developers spend more time in their code editor than anywhere else. VS Code has become the most widely used editor in the world not because it's the flashiest, but because it's deeply extensible, works with any language, and has a rich ecosystem of tools built on open standards. Knowing your editor well — its shortcuts, its configuration, its extension model — is one of the highest-leverage investments you can make as a developer.",
        "Across the three levels you'll move from essential shortcuts and project setup (CLAUDE.md, .vscode/, IntelliSense) through workspace configuration, the Language Server Protocol, and Claude Code's agentic capabilities, to advanced topics like prompt caching, automation hooks, and how subagents work. You'll come away understanding not just how to use these tools, but why they're designed the way they are.",
        "Claude Code is a new kind of tool — an AI that doesn't just answer questions but actually operates on your codebase. Understanding how it works, how to configure it, and how to give it the right context transforms it from a novelty into a genuine collaborator. These two tools together — VS Code and Claude Code — represent the modern developer's primary environment."
      ],
      highlight: {
        label: "KEY INSIGHT:",
        text: "A CLAUDE.md file is the difference between an AI that guesses at your project's conventions and one that already knows them before it touches a single file."
      }
    }
  },

  {
    track: "Building & Shipping",
    overview: {
      title: "Writing Code Is Only Half the Job",
      body: [
        "Getting an idea from your laptop to a live product that real users can access involves a whole set of skills beyond writing code. You need to manage dependencies so others can reproduce your environment, keep secrets out of source control, automate tests so bugs get caught before they reach production, and understand how to package and deploy your application reliably. These are the skills that separate a developer who can build for themselves from one who can ship for others.",
        "Across the three levels you'll start with the foundations — package management, environment variables, Docker, CI/CD, and versioning — then move to production infrastructure: reverse proxies, load balancers, GitHub Actions, feature flags, and infrastructure as code. The final level covers the delivery patterns used by elite engineering teams: blue-green deployments, the 12-factor app methodology, DORA metrics, and how distributed systems handle consistency.",
        "The most technically impressive code is worthless if it can't be reliably deployed and operated. Shipping is a skill in its own right — and teams that are good at it ship faster, break less, and recover in minutes instead of hours. Every concept in this track exists because a real team hit a real problem and needed a repeatable solution."
      ],
      highlight: {
        label: "KEY INSIGHT:",
        text: "The best engineers aren't just good at writing code — they're good at getting code to production safely and repeatedly, at will."
      }
    }
  },

  {
    track: "History of Programming & Development",
    overview: {
      title: "Every Tool You Use Has a Story",
      body: [
        "The terminal you type in, the language you write, the web you build for, the open source libraries you depend on — none of these appeared from nowhere. They were invented by specific people, in specific contexts, to solve specific problems. Understanding that history changes how you see the tools themselves: a command like ls makes more sense when you know Unix; Git's object model is less mysterious when you know why it was designed that way; the browser you test in exists because of a 1990s market war.",
        "Across the three levels you'll meet the pioneers — Ada Lovelace, Alan Turing, Grace Hopper, and the Bell Labs researchers who built the foundation — then trace the modern era from OOP and Java through the Browser Wars, the Agile movement, the rise of cloud computing, and Docker. The final level goes deeper into theory: Church and Turing's mathematical foundations, the Halting Problem, and the ideas that define what computers can and cannot do.",
        "This isn't history for its own sake. Developers who understand where their tools come from make better decisions about when to use them, how to reason about their limitations, and how to evaluate the new tools that keep arriving. The patterns repeat — every decade brings new languages, new platforms, new paradigms — and knowing the history helps you see through the hype."
      ],
      highlight: {
        label: "KEY INSIGHT:",
        text: "\"The best way to predict the future is to invent it.\" — Alan Kay, creator of Smalltalk and pioneer of object-oriented programming."
      }
    }
  }

];

const LEVELS = [

  // ═══════════════════════════════════════════════════════════════
  // TRACK: How It All Works
  // ═══════════════════════════════════════════════════════════════

  {
    track: "How It All Works",
    level: 1,
    lesson: {
      title: "Files, Browsers & the Big Three",
      body: [
        "Everything on a website is made of files — and the extension at the end of a filename (.html, .css, .js, .md) tells you what's inside. Think of it like the difference between a letter, a blueprint, and a recipe: same concept (a document), but completely different purposes. The three core files of any webpage are HTML, CSS, and JavaScript, and they each do exactly one job.",
        "Here's the analogy that makes it click: HTML is the walls and rooms of a house — the structure, the content, what's actually there. CSS is the paint, the furniture, the lighting — how it all looks. JavaScript is the electricity — what makes things move, respond, and do something when you interact with them. Take away CSS and your house is still standing, just ugly. Take away JavaScript and it's beautiful but completely unresponsive.",
        "When you open a webpage, the browser reads the HTML first, then fetches all the CSS and JavaScript files it references, then renders everything together. This is why the file called index.html is special — when a browser opens a folder or visits a URL without a specific filename, it looks for index.html by default. Name your main page anything else and the browser won't find it automatically."
      ],
      example: {
        label: "The three files that make every website:",
        code: "index.html  ← structure (what's on the page)\nstyle.css   ← style (what it looks like)\napp.js      ← behaviour (what it does)"
      }
    },
    questions: [
      {
        id: "hw-1-1",
        question: "You open a website and the layout is perfect but it looks completely unstyled — plain black text on a white background, no colors or fonts at all. Which file is most likely missing or broken?",
        options: ["The HTML file", "The CSS file", "The JavaScript file", "The index.html file"],
        answer: "The CSS file",
        explanation: "CSS controls all visual styling — colors, fonts, spacing, and layout. If it's missing, the content still shows (from HTML) but has no design at all.",
        detail: "This is actually a useful debugging trick: disabling CSS in your browser's developer tools reveals the raw HTML structure underneath. If content is visible but unstyled, the HTML loaded fine. If buttons don't work, check JavaScript. Each of the three layers fails independently, which makes it easier to isolate what's broken."
      },
      {
        id: "hw-1-2",
        question: "Your website looks great and loads correctly, but the buttons do nothing when your friend clicks them. The layout and colors are all there. Which layer of the three-file system is the problem?",
        options: ["HTML — the page structure is corrupted", "CSS — the visual styles have an error", "JavaScript — the interactive behaviour is broken or missing", "index.html — the entry point failed to load"],
        answer: "JavaScript — the interactive behaviour is broken or missing",
        explanation: "If a page looks right but doesn't respond to interaction, JavaScript is the missing layer. It's the only one responsible for behaviour — clicks, animations, and dynamic changes.",
        detail: "HTML = what's there. CSS = what it looks like. JavaScript = what it does. When something is wrong, this framework tells you exactly where to look: page loads but looks broken? CSS. Page looks fine but doesn't respond? JavaScript. Page doesn't load at all? HTML or the server. Open your browser's developer console (F12) to see JavaScript error messages when things stop working."
      },
      {
        id: "hw-1-3",
        question: "You build a website with three files: home.html, style.css, and app.js. You upload all of them to a web host, but visitors get a blank page or error when they go to your URL. The files are all there. What's most likely wrong?",
        options: ["The CSS file has a syntax error", "The main page was named home.html instead of index.html", "The JavaScript file is too large to serve", "The browser doesn't support modern HTML"],
        answer: "The main page was named home.html instead of index.html",
        explanation: "Servers look for index.html by default when no specific file is requested. Any other name won't be found automatically when someone visits your URL.",
        detail: "When a browser visits yoursite.com/, the server looks inside that folder for a file called index.html. This is a universal convention — Apache, Nginx, GitHub Pages all follow it. Rename home.html to index.html and the problem disappears. The same applies to subfolders: yoursite.com/about/ will look for an index.html inside a folder called 'about'."
      },
      {
        id: "hw-1-4",
        question: "You hover over a button on a website and it smoothly changes color. You want to understand why it does that. Which file should you look in, and why?",
        options: ["HTML — it defines the button's properties", "CSS — it controls visual appearance including hover states and transitions", "JavaScript — it handles all user interactions", "The server — it sends a different style when it detects a hover"],
        answer: "CSS — it controls visual appearance including hover states and transitions",
        explanation: "Hover color changes are defined in CSS using the :hover selector. No JavaScript needed — CSS alone handles visual-only changes like color, size, and smooth transitions.",
        detail: "CSS has 'pseudo-classes' — keywords that apply styles based on the state an element is in. The :hover pseudo-class applies styles when a mouse moves over an element. You can also add 'transition' in CSS to animate the change smoothly. JavaScript is only needed when interactions involve logic, data fetching, or major DOM changes — not just visual appearance."
      },
      {
        id: "hw-1-5",
        question: "A colleague sends you a file called README.md. You open it in a text editor and see lines like '# My Project' and '**important**'. What is .md and what are these symbols?",
        options: ["A binary music data format that displays incorrectly in text editors", "A Markdown file — plain text with simple symbols that render as formatted headings and bold text", "A compiled Mac application that needs to be executed, not read", "A database format used internally by developer tools"],
        answer: "A Markdown file — plain text with simple symbols that render as formatted headings and bold text",
        explanation: ".md stands for Markdown — a lightweight format where # creates a heading and ** wraps bold text. It's designed to be readable as plain text and render beautifully as formatted content.",
        detail: "Markdown was designed to be human-readable in its raw form while also converting cleanly to HTML. GitHub automatically renders .md files — that's why every repository has a README.md that shows up as a nicely formatted page with headings, lists, and code blocks. VS Code, Notion, and most developer tools support Markdown natively. It's one of the most widely used plain-text formats in software development."
      }
    ]
  },

  {
    track: "How It All Works",
    level: 2,
    lesson: {
      title: "The Terminal & Version Control",
      body: [
        "The terminal is the thing that looks like something from a 1980s hacker movie — black screen, blinking cursor, text commands. It's not old-fashioned, it's precise. Instead of clicking through menus, you type exactly what you want your computer to do. The analogy: using a GUI (graphical interface) is like tapping your order on a restaurant touchscreen. Using the terminal is like texting the chef directly. Both get you food, but one gives you far more control and can be fully automated.",
        "Git is a version control system — and the best way to understand it is as a time machine for your project. Every time you reach a meaningful point, you take a snapshot called a commit. Each commit has a label you write yourself (like 'add login page') and a timestamp. If you ever break something, you can jump back to any previous snapshot instantly. Unlike Ctrl+Z, Git's history never expires and it works across your entire project at once.",
        "Here's the distinction that trips everyone up: Git and GitHub are not the same thing. Git is a tool that runs on your computer. GitHub is a website where you store copies of your Git history in the cloud. Think of Git as your notebook and GitHub as a safety deposit box at the bank. A 'commit' creates a snapshot in your local notebook. A 'push' sends those snapshots to the bank. If your laptop is stolen, everything you pushed to GitHub is safe."
      ],
      example: {
        label: "The Git workflow — save a moment in time:",
        code: "git add .                       # stage your changes\ngit commit -m \"add login page\"  # create the snapshot\ngit push                        # send it to GitHub"
      }
    },
    questions: [
      {
        id: "hw-2-1",
        question: "You want to create a new project folder, navigate into it, and create an empty index.html file — all without touching your mouse. What tool lets you do this with a few typed commands?",
        options: ["The file browser (Finder or Windows Explorer)", "A text editor like VS Code or Notepad", "The terminal", "A web browser's developer tools"],
        answer: "The terminal",
        explanation: "The terminal accepts text commands that control your computer directly — creating folders, navigating into them, and creating files are all single commands.",
        detail: "In the terminal: mkdir my-project creates the folder, cd my-project navigates into it, and touch index.html creates the file. Three commands, done. Compare that to right-clicking, naming a folder, opening it, then creating a new file through a menu. The terminal is faster for individual tasks and infinitely more powerful for repeated ones — you can save those commands as a script that runs automatically whenever you start a new project."
      },
      {
        id: "hw-2-2",
        question: "You've been building a feature for three days. A change you made today broke everything and you can't undo it. You wish you could return to how the project was yesterday morning. What tool is designed exactly for this?",
        options: ["A cloud sync service like Dropbox or iCloud", "Git — version control that saves named snapshots of your project at each commit", "Your text editor's undo history", "Manually copying files to a backup folder each day"],
        answer: "Git — version control that saves named snapshots of your project at each commit",
        explanation: "Git lets you commit (snapshot) your project at any meaningful point and return to any previous commit at any time, no matter how much has changed since.",
        detail: "Dropbox saves the latest version of a file. A text editor's undo history disappears when you close it. Git saves intentional snapshots — you decide when to commit and write a message explaining what that snapshot represents. Developers commit before risky changes, after features start working, and before major refactors. It's a deliberate practice, not just a feature."
      },
      {
        id: "hw-2-3",
        question: "You've been committing your project to Git on your laptop every day for a month. Your laptop gets stolen. Is your code gone? What determines the answer?",
        options: ["Yes — Git only saves snapshots on your local machine", "It depends — if you pushed your commits to GitHub, the code is safe; if you only committed locally, it's lost", "No — Git automatically backs everything up to the cloud", "It depends on whether you have a paid Git subscription"],
        answer: "It depends — if you pushed your commits to GitHub, the code is safe; if you only committed locally, it's lost",
        explanation: "Git commits live on your local machine. Pushing sends them to GitHub. Until you push, nothing exists in the cloud — committing and pushing are two separate steps.",
        detail: "This trips people up constantly. git commit creates a snapshot in your local .git folder. git push sends those snapshots to GitHub's servers. Many developers commit frequently and push at the end of each day (or more often). If you only ever committed locally, those commits were on your machine. The lesson: push regularly — it's free, instant, and it's your offsite backup."
      },
      {
        id: "hw-2-4",
        question: "You've finished a working feature — the login page looks right and works perfectly. You want to save this moment in Git so you can always come back to exactly this state. What do you do, in the correct order?",
        options: ["git push, then git commit", "git save, then git upload", "git add, then git commit", "git commit, then git add"],
        answer: "git add, then git commit",
        explanation: "You first stage your changes with git add (selecting what to include), then create the named snapshot with git commit. Pushing to GitHub comes after, when you're ready to sync.",
        detail: "The three-step Git workflow: git add . (stage everything changed), git commit -m 'describe what you did' (create the snapshot with a label), git push (send it to GitHub). You don't have to push every time you commit — many developers commit multiple times throughout the day and push once before finishing. Every commit message should make sense to you six months from now."
      },
      {
        id: "hw-2-5",
        question: "Your friend asks why developers use the terminal instead of just clicking through menus — clicking seems easier. You explain that the real advantage isn't speed. What is it?",
        options: ["The terminal is always faster for every type of task", "Terminal commands can be saved as scripts and run automatically — you can't automate clicking through menus the same way", "Most employers require terminal proficiency for legal reasons", "Graphical interfaces don't actually work on professional-grade computers"],
        answer: "Terminal commands can be saved as scripts and run automatically — you can't automate clicking through menus the same way",
        explanation: "The real power of the terminal is automation — commands can be written once, saved as a script, and run by other systems without any human involvement.",
        detail: "Imagine needing to run tests, build your app, and deploy to a server every time anyone pushes new code. A human can't click through that manually every time. But you can write those steps as terminal commands in a script file, and a service like GitHub Actions runs them automatically on every push. That's CI/CD — and it's only possible because the terminal is programmable. Mouse clicks are not."
      }
    ]
  },

  {
    track: "How It All Works",
    level: 3,
    lesson: {
      title: "How the Internet Actually Works",
      body: [
        "When you type a URL and hit enter, about a dozen things happen in under a second — and most people have no idea what they are. Here's the journey: your browser asks a DNS (Domain Name System) server to translate the human-readable address (like 'github.com') into a numeric IP address — the actual location of a server on the internet. Then it sends a request to that server. The server sends back your files. Your browser renders them. Done. The analogy: the browser is a customer, the URL is a restaurant's address, DNS is the phone book, and the server is the kitchen sending out your order.",
        "Hosting is what makes a website publicly accessible. When you open files on your laptop, only you can see them. Hosting means putting those files on a server — a computer that's always on, always connected to the internet, and has a public address anyone can reach. GitHub Pages does this for free: push your code to a repository, enable Pages, and GitHub serves your index.html at a real URL. Your files don't move to people's computers when they visit — they request and receive a fresh copy from the server each time.",
        "An API (Application Programming Interface) is how two programs talk to each other. Think of it like a waiter: you don't go into the kitchen, you tell the waiter what you want, and the kitchen prepares it and sends it out. A weather app doesn't build its own forecast — it sends a request to a weather service's API and gets back structured data. A payment button doesn't process cards itself — it talks to Stripe's API. Almost every modern app you use is secretly a collection of API calls, assembled into something that looks seamless."
      ],
      example: {
        label: "What happens when you type a URL:",
        code: "1. Browser asks DNS: where is 'devquiz.com'?\n2. DNS replies: 'It's at 185.199.108.153'\n3. Browser asks that server: 'Give me the page'\n4. Server sends: index.html, style.css, game.js\n5. Browser renders it all — you see the game"
      }
    },
    questions: [
      {
        id: "hw-3-1",
        question: "You type 'github.com' into your browser and hit enter. In the milliseconds before the page loads, your browser has to find out where github.com physically lives on the internet. What happens in that gap?",
        options: ["The browser already stores the location of every popular website", "The browser asks a DNS server to translate 'github.com' into a numeric IP address — the server's actual location", "GitHub's servers detect your visit and push the page to you automatically", "Your internet provider loads a locally cached copy of the page"],
        answer: "The browser asks a DNS server to translate 'github.com' into a numeric IP address — the server's actual location",
        explanation: "DNS (Domain Name System) is the internet's phone book. It converts human-readable domain names into the IP addresses of the servers that actually host them.",
        detail: "Every server on the internet has an IP address — a number like 140.82.114.4. DNS stores the mapping from names to those numbers. When you type a URL, your computer checks its local cache first, then your router, then your ISP's DNS server. The lookup takes milliseconds. This system is why you can type 'google.com' instead of memorizing '142.250.80.46' — and why changing a website's server only requires updating a single DNS record."
      },
      {
        id: "hw-3-2",
        question: "You've built a website that works perfectly when you open the files on your laptop. You share the file path with a friend, but they can't open it. What fundamental thing is missing — and what would fix it?",
        options: ["Your friend needs to install the same browser you use", "The site needs hosting — the files need to live on a server that's always connected to the internet with a public address", "The HTML file needs to be converted to a different format for sharing", "Your friend's operating system is incompatible with your file types"],
        answer: "The site needs hosting — the files need to live on a server that's always connected to the internet with a public address",
        explanation: "A file path like /Users/you/project/index.html only works on your machine. Hosting puts your files on a server anyone on the internet can reach.",
        detail: "When you open a file locally, your browser reads it from your hard drive — no internet involved. When you open a URL, your browser contacts a server somewhere in the world. Hosting services (GitHub Pages, Netlify, Vercel) give your files a permanent public home. GitHub Pages is free for static sites: push your code to a repo, enable Pages in settings, and your site is live at yourusername.github.io/reponame — instantly, for free."
      },
      {
        id: "hw-3-3",
        question: "A weather app on your phone shows a live forecast. The app clearly didn't build its own weather data. It gets it from a weather service somewhere. What is the mechanism that lets two separate programs share data this way?",
        options: ["A shared database that both programs read and write to at the same time", "An API — a defined channel through which one program requests data or actions from another", "A direct file transfer that runs in the background between the two apps", "A plugin installed on both the app and the weather service"],
        answer: "An API — a defined channel through which one program requests data or actions from another",
        explanation: "An API is a contract between two programs: one defines exactly how to request data, the other promises to respond in a predictable format.",
        detail: "API stands for Application Programming Interface, but the useful mental model is simpler: it's a menu and an order system. The weather service publishes an API: 'send us a city name here, we'll send back a forecast in this format.' Your app calls that endpoint, gets back structured data (usually JSON), and displays it. This is how almost all modern apps work — your social feed, map directions, and payment flows are all API calls assembled into something that feels seamless."
      },
      {
        id: "hw-3-4",
        question: "You push DevQuiz to GitHub Pages and share the link. A friend in Tokyo opens it on their phone. Where do your files actually live — and how do they reach your friend?",
        options: ["Your files stay on your laptop and are sent directly when someone opens the link", "GitHub stores your files on their servers; your friend's browser requests them from GitHub, which sends them over the internet", "Your files are automatically copied to a server closer to Tokyo when someone there visits", "The link streams a live recording of your screen rather than serving the actual files"],
        answer: "GitHub stores your files on their servers; your friend's browser requests them from GitHub, which sends them over the internet",
        explanation: "Pushing to GitHub Pages uploads your files to GitHub's servers. Anyone visiting the URL has their browser fetch those files from GitHub — geography doesn't matter.",
        detail: "When you push, GitHub stores your files on their infrastructure. When your friend visits the URL in Tokyo, their browser sends an HTTP request to GitHub's servers. GitHub responds with your index.html, then the browser requests style.css and game.js, renders everything, and your friend plays the game — even though you're on the other side of the world. The files never moved to Tokyo. The internet carried a copy there. The web is a very fast postal system for files."
      },
      {
        id: "hw-3-5",
        question: "A news website loads instantly — the layout and navigation appear right away — but the articles and headlines take a full second to appear. The structure is there, the content comes in late. What is most likely happening?",
        options: ["The CSS file is very large and loading slowly", "JavaScript is calling an API to fetch the content after the page loads, then inserting it into the already-visible structure", "The server is sending the page in two separate chunks to improve speed", "The browser renders images before text, which causes the delay"],
        answer: "JavaScript is calling an API to fetch the content after the page loads, then inserting it into the already-visible structure",
        explanation: "Many modern sites load the shell (HTML + CSS) instantly, then JavaScript fetches the actual content from an API and populates the page. This makes the page feel fast even when the data takes a moment.",
        detail: "This pattern is called an asynchronous fetch. The browser loads and renders the page structure right away, then JavaScript runs and calls an API: 'give me today's headlines'. The API returns structured data (JSON), and JavaScript dynamically injects it into the page. This is why you see loading spinners where content will appear — the shell is ready, the data is in transit. Social media feeds, dashboards, and search results all work exactly this way."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // TRACK: Terminal & Git
  // ═══════════════════════════════════════════════════════════════

  {
    track: "Terminal & Git",
    level: 1,
    lesson: {
      title: "Shell Navigation & Your First Commit",
      body: [
        "The terminal is a text interface to your operating system. Instead of clicking through folders, you type commands to navigate, create files, and run programs. The essential navigation commands are: pwd (print your current location), ls (list files — add -a to include hidden ones), cd to move into a folder, cd .. to go up one level, touch to create an empty file, and rm to delete files. Learning these six commands gives you enough to navigate any Unix-like system.",
        "Git is a version control system that tracks changes to your files over time. The core workflow is three steps: make changes, stage them with git add, and save a snapshot with git commit. You start a new project with git init, which creates a hidden .git folder. git add . stages everything in the current directory. git commit -m 'message' saves the snapshot with a message explaining what changed and why.",
        "Every commit gets a unique SHA hash and records author, timestamp, and message. git log shows this history in reverse order. Hidden files — those whose names start with a dot, like .gitignore or .env — are invisible to ls unless you pass the -a flag. Be careful with rm -rf: unlike deleting via a GUI, there is no Trash. Everything is gone immediately and permanently."
      ],
      example: {
        label: "Basic git workflow:",
        code: "git init\ngit add .\ngit commit -m \"initial commit\""
      }
    },
    questions: [
      {
        id: "tg-1-1",
        question: "You're debugging a project and suspect a .env file exists in the folder, but running `ls` shows nothing unusual. What command reveals hidden files?",
        options: ["ls", "ls -a", "ls -l", "dir"],
        answer: "ls -a",
        explanation: "The -a flag stands for 'all' and includes hidden files (those starting with a dot, like .gitignore).",
        detail: "Hidden files in Unix-like systems are prefixed with a dot (e.g., .bashrc, .env). The ls command alone skips them. Combining flags like ls -la gives you a long-format list of all files including hidden ones — very useful when debugging config issues or checking what's in a home directory."
      },
      {
        id: "tg-1-2",
        question: "You're inside /Users/alice/projects/myapp and need to get up to /Users/alice/projects. You type `cd ..` and press enter. What does this do?",
        options: ["Opens the home directory", "Goes up one directory level", "Creates a new directory", "Lists directory contents"],
        answer: "Goes up one directory level",
        explanation: "In shell navigation, `..` always refers to the parent directory, so cd .. moves you one level up in the folder tree.",
        detail: "The shell uses `.` to mean 'current directory' and `..` to mean 'parent directory'. You can chain them: `cd ../..` moves up two levels. `cd ~` or just `cd` takes you straight to your home directory no matter where you are."
      },
      {
        id: "tg-1-3",
        question: "You need a placeholder file called notes.txt to exist in your project before your script runs, but you don't want to add any content yet. What command creates it?",
        options: ["mkdir myfile.txt", "new myfile.txt", "touch myfile.txt", "create myfile.txt"],
        answer: "touch myfile.txt",
        explanation: "The `touch` command creates an empty file if it doesn't exist, or updates the timestamp if it does.",
        detail: "Originally, `touch` was designed to update file access and modification timestamps. As a side effect, if the file doesn't exist, it creates one. It's widely used to quickly scaffold empty config or placeholder files in projects."
      },
      {
        id: "tg-1-4",
        question: "You've created a new project folder. You run `git init` inside it. What does this do to the folder?",
        options: ["Clones a remote repository", "Initialises a new local Git repository", "Pushes code to GitHub", "Commits staged changes"],
        answer: "Initialises a new local Git repository",
        explanation: "git init creates a .git folder in your current directory, turning it into a Git repository so you can start tracking changes.",
        detail: "Running git init sets up the hidden .git directory that stores all version history, configuration, and staged changes. You only run it once per project. For existing repos on platforms like GitHub, you'd use git clone instead to get a copy of an already-initialised repo."
      },
      {
        id: "tg-1-5",
        question: "You've edited three files and want to include all of them in your next commit. What do you type to stage everything at once?",
        options: ["git commit -a", "git add .", "git push", "git stage --all"],
        answer: "git add .",
        explanation: "git add . stages all modified and new files in the current directory and subdirectories, making them ready to be committed.",
        detail: "Staging is a middle step between editing and committing. It lets you choose exactly what goes into each commit. git add . is convenient but broad — for precision, use git add <filename> to stage individual files and keep your commits focused and meaningful."
      },
      {
        id: "tg-1-6",
        question: "You open a new terminal window and aren't sure which directory you're currently in. You type `pwd` and hit enter. What appears?",
        options: ["Password prompt", "List of running processes", "The full path of the current directory", "Disk usage"],
        answer: "The full path of the current directory",
        explanation: "pwd stands for 'print working directory' — it outputs the absolute path of wherever you currently are in the filesystem.",
        detail: "Knowing your current directory is fundamental when writing scripts or debugging path issues. Absolute paths start from the root / (e.g., /Users/alice/projects), while relative paths start from wherever you are. pwd always gives you the absolute path."
      },
      {
        id: "tg-1-7",
        question: "You've inherited a codebase and want to see every commit ever made — author, date, and message for each. What command do you run?",
        options: ["git status", "git history", "git log", "git show"],
        answer: "git log",
        explanation: "git log displays the list of commits in reverse chronological order, including author, date, and commit message.",
        detail: "git log --oneline gives a compact one-line-per-commit view. git log --graph adds an ASCII branch diagram. You can filter by author (--author), date range (--since, --until), or search commit messages with --grep. Mastering git log is essential for understanding a project's history."
      },
      {
        id: "tg-1-8",
        question: "A teammate warns you to be careful with `rm -rf`. You're about to clean up an old build folder. What exactly will `rm -rf build/` do?",
        options: ["Renames the folder", "Recursively force-deletes the folder and all its contents", "Removes empty folders only", "Moves folder to trash"],
        answer: "Recursively force-deletes the folder and all its contents",
        explanation: "rm removes files, -r makes it recursive (handles directories), and -f forces deletion without asking for confirmation. Use with extreme caution.",
        detail: "rm -rf is one of the most dangerous commands in a terminal because it deletes everything permanently with no undo. There is no Trash with rm. Many developers have accidentally wiped entire projects or system directories. Always double-check the path before running it."
      }
    ]
  },

  {
    track: "Terminal & Git",
    level: 2,
    lesson: {
      title: "Branching, Stashing & Remotes",
      body: [
        "Branches let you work on a feature or fix in isolation without touching the main codebase. git checkout -b feature-name (or the newer git switch -c feature-name) creates and switches to a new branch in one step. When work on the branch is done, you integrate it back via merge or rebase. git merge creates a new merge commit preserving the branch history; git rebase replays your commits on top of the target branch, producing a cleaner linear history but rewriting commit hashes — safe only before pushing.",
        "git stash is your escape hatch when you need to switch context mid-task. It shelves all uncommitted changes and restores a clean working directory. git stash pop brings them back. Understanding where you are in the Git model matters too: git diff HEAD shows all changes since the last commit (staged and unstaged combined). A 'detached HEAD' state means HEAD points directly to a commit hash rather than a branch — useful for inspecting old code, but any commits you make there will be orphaned unless you first run git switch -c new-branch.",
        "A remote is a named reference to the repository hosted elsewhere. git remote -v lists them and their URLs. The default remote created by git clone is called origin. Cherry-picking (git cherry-pick <hash>) lets you grab a single commit from anywhere in history and replay it on the current branch — handy for applying a hotfix from a feature branch to main without merging everything. The .gitignore file tells Git which files to never track: node_modules, build output, .env files, OS metadata like .DS_Store."
      ],
      example: {
        label: "Create a branch, stash work, and list remotes:",
        code: "git checkout -b feature/new-login\ngit stash\ngit remote -v"
      }
    },
    questions: [
      {
        id: "tg-2-1",
        question: "You're mid-feature when your lead asks you to fix a bug on main right now. Your changes aren't ready to commit. What does `git stash` do to help you switch context cleanly?",
        options: ["Permanently deletes uncommitted changes", "Saves uncommitted changes temporarily and cleans the working directory", "Creates a new branch", "Pushes changes to a stash remote"],
        answer: "Saves uncommitted changes temporarily and cleans the working directory",
        explanation: "git stash shelves your current work so you can switch context, then use git stash pop to restore it later.",
        detail: "Stashing is helpful when you need to pull new changes or switch branches without committing half-finished work. git stash list shows all stashed entries. git stash pop restores the most recent stash and removes it from the list; git stash apply keeps it in the list for later reuse."
      },
      {
        id: "tg-2-2",
        question: "You're about to push your project to GitHub, but your repo contains node_modules/, a .env file with API keys, and .DS_Store files. What does adding them to .gitignore do?",
        options: ["Lists contributors to ignore in blame", "Specifies files and folders Git should not track", "Hides the repo from public view", "Disables git log output"],
        answer: "Specifies files and folders Git should not track",
        explanation: "Files listed in .gitignore are excluded from Git tracking — commonly used for node_modules, .env files, build output, and OS files.",
        detail: "A well-crafted .gitignore prevents sensitive data (API keys in .env) and noise (OS metadata like .DS_Store) from cluttering your history. GitHub maintains a repository of recommended .gitignore templates for popular languages and frameworks at github.com/github/gitignore."
      },
      {
        id: "tg-2-3",
        question: "You're starting a new feature and need to create a branch and switch to it in a single command. Which of these options works?",
        options: ["git branch new-branch && git checkout new-branch", "git checkout -b new-branch", "git switch --create new-branch", "Both B and C are correct"],
        answer: "Both B and C are correct",
        explanation: "git checkout -b and git switch --create (or -c) both create a new branch and switch to it in a single command.",
        detail: "git switch was introduced in Git 2.23 as a clearer alternative to the overloaded git checkout. Both work identically for branch operations. Many codebases still use checkout, but switch is considered more intuitive because it does one thing: switch branches."
      },
      {
        id: "tg-2-4",
        question: "Your feature branch has 5 commits but main has moved on. Your team wants a clean, linear history. Someone suggests rebasing instead of merging. What's the key difference between the two?",
        options: ["Rebase creates a merge commit; merge does not", "Rebase rewrites commit history to apply commits on top of another branch; merge creates a new merge commit", "They are identical in outcome", "Rebase is only for undoing commits"],
        answer: "Rebase rewrites commit history to apply commits on top of another branch; merge creates a new merge commit",
        explanation: "Rebase produces a linear history by replaying commits; merge preserves the branching structure with a merge commit.",
        detail: "Teams debate rebase vs. merge constantly. Rebase creates cleaner history but rewrites commits — dangerous on shared branches. Merge is safer for collaboration but leaves a messier graph. A common workflow: rebase your feature branch onto main locally, then merge via a pull request to preserve context."
      },
      {
        id: "tg-2-5",
        question: "You've made some edits and staged a few of them, but you want to review everything you've changed since your last commit — staged or not. What does `git diff HEAD` show?",
        options: ["Differences between two remote branches", "All changes since the last commit (staged and unstaged)", "Only staged changes", "Changes in the most recent commit only"],
        answer: "All changes since the last commit (staged and unstaged)",
        explanation: "HEAD refers to your most recent commit, so git diff HEAD shows everything that has changed since then.",
        detail: "git diff alone shows only unstaged changes. git diff --staged shows only staged ones. git diff HEAD combines both. Understanding how HEAD, the index (staging area), and the working tree relate is key to navigating Git confidently."
      },
      {
        id: "tg-2-6",
        question: "You ran `git checkout abc1234` to inspect an old commit. VS Code now shows 'HEAD detached'. What does this state mean?",
        options: ["A corrupted repository", "When HEAD points directly to a commit rather than a branch", "When the remote branch is deleted", "When you have unresolved merge conflicts"],
        answer: "When HEAD points directly to a commit rather than a branch",
        explanation: "Detached HEAD means you're looking at a specific commit, not a branch tip. Any commits you make won't belong to a branch and can be lost.",
        detail: "You enter detached HEAD by checking out a specific commit hash (git checkout abc1234). It's useful for inspecting old code, but if you want to make changes, first create a branch (git switch -c new-branch) so your work isn't orphaned."
      },
      {
        id: "tg-2-7",
        question: "You fixed a critical bug on your feature branch but main still has the bug. You need that one fix on main now, without merging the entire feature branch. What does `git cherry-pick <hash>` do?",
        options: ["Deletes the specified commit", "Applies the changes from a specific commit to the current branch", "Copies an entire branch", "Tags a commit"],
        answer: "Applies the changes from a specific commit to the current branch",
        explanation: "cherry-pick lets you grab a single commit from anywhere in the history and replay it on your current branch.",
        detail: "Cherry-picking is useful for hotfixes — say you fixed a bug on a feature branch and need that fix on main without merging the whole branch. Run git cherry-pick <hash> on main. Be careful: cherry-picking duplicates commits, which can cause confusion when eventually merging the original branch."
      },
      {
        id: "tg-2-8",
        question: "You've cloned a repo but aren't sure which GitHub URL it's connected to, or whether it has any other remotes configured. What does `git remote -v` show you?",
        options: ["Connects to a new remote repository", "Displays all configured remote repositories and their URLs", "Verifies remote credentials", "Validates the repo structure"],
        answer: "Displays all configured remote repositories and their URLs",
        explanation: "git remote -v lists all remotes (typically origin) along with their fetch and push URLs.",
        detail: "A remote is a named reference to a repository hosted elsewhere (GitHub, GitLab, etc.). The default remote added by git clone is called origin. You can have multiple remotes — useful for working with forks (origin = your fork, upstream = the original repo)."
      }
    ]
  },

  {
    track: "Terminal & Git",
    level: 3,
    lesson: {
      title: "Git Internals & Power Commands",
      body: [
        "Git stores everything as content-addressable objects identified by a SHA hash of their content. There are four object types: blob (raw file content), tree (directory listing pointing to blobs and other trees), commit (a snapshot pointer with author, timestamp, and parent commit), and tag. Two files with identical content always share one blob. This means every commit is a complete, cryptographically verifiable snapshot — and identical content is stored only once, keeping repos lean.",
        "git reflog is your safety net. It records every movement of HEAD — including resets, rebases, and checkouts that never appear in git log. If you accidentally git reset --hard and lose commits, they still exist in the object store. Find their hashes in reflog, then git checkout <hash> or git reset --hard <hash> to recover them. Entries expire after 90 days. git bisect automates binary search through history to find which commit introduced a bug: mark commits as good or bad and Git checks out the midpoint until the culprit is isolated.",
        "History-rewriting commands require care. git commit --amend replaces the last commit with a new one (new hash) — safe only before pushing. git push --force-with-lease is the safe form of force-push: it aborts if the remote has commits you haven't fetched, preventing you from silently overwriting a teammate's work. A fast-forward merge moves the branch pointer linearly when there is no divergence, creating no merge commit. Use --no-ff to force a merge commit and preserve a record that a branch existed. git submodule embeds one repository inside another at a pinned commit."
      ],
      example: {
        label: "Recover lost work with reflog:",
        code: "git reflog\ngit checkout HEAD@{2}"
      }
    },
    questions: [
      {
        id: "tg-3-1",
        question: "You ran `git reset --hard` and your last 3 commits seem gone from `git log`. A colleague says to check reflog. What does reflog show that `git log` doesn't?",
        options: ["A list of remote commits", "A record of all HEAD movements including actions that aren't in regular history", "Commit messages only", "Diff output for every commit"],
        answer: "A record of all HEAD movements including actions that aren't in regular history",
        explanation: "reflog tracks every movement of HEAD — resets, rebases, checkouts — making it possible to recover 'lost' commits.",
        detail: "git reflog is your safety net. After a bad rebase or hard reset, commits may not appear in git log but still exist. Reflog shows their hashes so you can git checkout or git reset --hard back to them. Entries expire after 90 days by default."
      },
      {
        id: "tg-3-2",
        question: "You just committed with a typo in the message and forgot to stage one file. You haven't pushed yet. What does `git commit --amend` do?",
        options: ["Creates a new branch from the last commit", "Replaces the most recent commit with a new one (rewrites history)", "Reverts the last commit", "Adds a tag to the last commit"],
        answer: "Replaces the most recent commit with a new one (rewrites history)",
        explanation: "amend modifies the last commit's content or message. It rewrites history, so avoid it on commits already pushed to shared branches.",
        detail: "Under the hood, --amend creates an entirely new commit object with a different hash and discards the old one. If you've already pushed, anyone who pulled has the old hash in their history, causing divergence. Safe rule: only amend commits that haven't been pushed yet."
      },
      {
        id: "tg-3-3",
        question: "Your app has a bug that wasn't there three weeks ago. You have hundreds of commits since then and no idea when it was introduced. What is `git bisect` designed to help you do?",
        options: ["Split a large commit into smaller ones", "Binary-search through commit history to find which commit introduced a bug", "Compare two branches side by side", "Merge two diverged branches"],
        answer: "Binary-search through commit history to find which commit introduced a bug",
        explanation: "git bisect automates a binary search: you mark commits as good or bad, and Git narrows down which commit introduced the regression.",
        detail: "Start with git bisect start, then git bisect bad (current broken commit) and git bisect good <hash> (last known working commit). Git checks out the midpoint; you test and mark good/bad. Repeat until it pinpoints the culprit. With git bisect run <test-script> you can fully automate the process."
      },
      {
        id: "tg-3-4",
        question: "You ran `git merge feature-branch` and your file now contains `<<<<<<< HEAD`, `=======`, and `>>>>>>> feature-branch` markers. What do these mean?",
        options: ["Corrupted file content", "The start of HEAD's version and the end of the incoming branch's version respectively", "Comments added by the other developer", "Lines deleted from both branches"],
        answer: "The start of HEAD's version and the end of the incoming branch's version respectively",
        explanation: "Conflict markers divide the conflicting section: HEAD's version above =======, the incoming branch's version below.",
        detail: "To resolve: edit the file to keep what you want (remove all markers), then git add and git commit. Tools like VS Code's built-in diff editor, IntelliJ, or CLI tools like vimdiff display conflicts more visually. git mergetool launches your configured tool automatically."
      },
      {
        id: "tg-3-5",
        question: "You rebased your feature branch and need to force-push to update the remote. Your team also pushes to this branch. Why should you use `--force-with-lease` instead of `--force`?",
        options: ["It encrypts the push", "It checks that no one else has pushed to the remote since your last fetch before overwriting", "It only pushes tags", "It forces a merge commit on the remote"],
        answer: "It checks that no one else has pushed to the remote since your last fetch before overwriting",
        explanation: "--force-with-lease is a safer force push: it fails if the remote has commits you haven't seen, preventing you from overwriting a teammate's work.",
        detail: "--force blindly overwrites the remote branch. --force-with-lease adds a safety check based on the remote tracking ref. It's still history rewriting (avoid on shared branches), but it's the right choice when you must force-push a rebased branch, as it won't silently nuke colleagues' commits."
      },
      {
        id: "tg-3-6",
        question: "You merge a feature branch into main and Git reports 'Fast-forward' instead of creating a merge commit. What does this tell you about the branch history?",
        options: ["A merge that runs faster due to caching", "When the target branch has no new commits, so the branch pointer simply moves forward", "A merge that squashes all commits", "A merge that bypasses conflict detection"],
        answer: "When the target branch has no new commits, so the branch pointer simply moves forward",
        explanation: "A fast-forward merge happens when there's a straight line of commits — no divergence — so Git just moves the pointer rather than creating a merge commit.",
        detail: "Use --no-ff to force a merge commit even when a fast-forward is possible. This preserves evidence that a branch existed, which many teams prefer for traceability. CI/CD workflows often squash and fast-forward to keep main history linear while grouping feature changes into one commit."
      },
      {
        id: "tg-3-7",
        question: "Your project depends on a shared internal library that has its own Git repo. You want to include it at a specific pinned version. What does `git submodule` let you do?",
        options: ["Break a monorepo into multiple repos automatically", "Include another Git repository as a subdirectory within your repo", "Sync branches across multiple remote origins", "Add Git tracking to individual files"],
        answer: "Include another Git repository as a subdirectory within your repo",
        explanation: "Submodules let you embed one Git repository inside another, with a pinned commit reference — useful for shared libraries or external dependencies.",
        detail: "The parent repo stores the submodule's path and the exact commit it should be on. git clone doesn't fetch submodule content by default — you need git submodule update --init. Many teams now prefer monorepos or package managers over submodules due to their operational complexity."
      },
      {
        id: "tg-3-8",
        question: "Two files in your project have identical content. Git doesn't store the data twice. What is the fundamental storage unit that makes this deduplication possible?",
        options: ["Files", "Commits", "Content-addressable blobs (SHA-1/SHA-256 hashed objects)", "Branches"],
        answer: "Content-addressable blobs (SHA-1/SHA-256 hashed objects)",
        explanation: "Git stores everything (blobs, trees, commits, tags) as content-addressable objects identified by their SHA hash — the hash of the content IS the key.",
        detail: "Git's four object types are: blob (file content), tree (directory listing), commit (snapshot pointer + metadata), and tag. Two identical files always share one blob object. This deduplication and immutability is why Git is so efficient and why commits can be cryptographically verified."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // TRACK: VS Code & Claude Code
  // ═══════════════════════════════════════════════════════════════

  {
    track: "VS Code & Claude Code",
    level: 1,
    lesson: {
      title: "Editor Essentials & Meeting Claude Code",
      body: [
        "VS Code is built for keyboard-driven workflows. The three shortcuts that unlock most of the editor: Ctrl+Shift+P (Cmd+Shift+P on Mac) opens the Command Palette — a searchable list of every editor action and its shortcut; Ctrl+` opens the integrated terminal without leaving your editor; Ctrl+P (Quick Open) jumps to any file by name. Once you've enabled the shell command ('Install code command in PATH' from the Command Palette), you can open VS Code for any folder by typing code . in your terminal.",
        "IntelliSense is VS Code's umbrella term for smart completions, method signatures, and inline documentation — powered by Language Server Protocol (LSP). LSP decouples language tooling from editors, so one Python language server works in VS Code, Neovim, and Emacs alike. Multi-cursor editing is one of VS Code's most powerful features: Alt+Click places cursors manually, Ctrl+D selects the next match of the highlighted word, and Shift+Alt+I adds a cursor at the end of every selected line. The .vscode/ folder stores project-specific settings, debugger launch configs, and extension recommendations you can commit alongside your code.",
        "Claude Code is Anthropic's agentic coding CLI. Unlike chat-based AI, it operates directly on your filesystem — it can read files, run terminal commands, edit code, and commit changes, all within a single conversation. CLAUDE.md is the key to making it effective: a project-level instruction file that Claude reads at the start of every session. A good CLAUDE.md includes your tech stack, common build and test commands, coding conventions, and things Claude should avoid. Think of it as a README written for your AI collaborator."
      ],
      example: {
        label: "Open VS Code from the terminal:",
        code: "code ."
      }
    },
    questions: [
      {
        id: "vc-1-1",
        question: "You want to change your VS Code theme but can't find the right menu option. You remember there's a searchable list of every editor action. Which shortcut opens it?",
        options: ["Ctrl+P / Cmd+P", "Ctrl+Shift+P / Cmd+Shift+P", "Ctrl+K / Cmd+K", "Ctrl+` / Cmd+`"],
        answer: "Ctrl+Shift+P / Cmd+Shift+P",
        explanation: "The Command Palette lets you run any VS Code command by typing its name — it's the fastest way to access settings, extensions, and editor actions.",
        detail: "Ctrl+P (Quick Open) opens the file switcher. Ctrl+Shift+P opens the Command Palette with a > prefix. Type > in Quick Open to switch between modes. The Command Palette also shows keyboard shortcuts next to commands, making it a great way to discover shortcuts organically."
      },
      {
        id: "vc-1-2",
        question: "You're editing code in VS Code and need to run a quick command without switching windows or losing your place. Which shortcut opens a terminal panel inside VS Code?",
        options: ["View → Output", "Ctrl+` / Cmd+`", "Ctrl+T / Cmd+T", "File → New Terminal"],
        answer: "Ctrl+` / Cmd+`",
        explanation: "The backtick shortcut toggles the integrated terminal panel, giving you a shell without leaving your editor.",
        detail: "The integrated terminal runs inside VS Code and inherits your project's environment variables and working directory. You can have multiple terminals open simultaneously (click + in the terminal panel), split them side by side, and rename each one. It supports bash, zsh, PowerShell, and more."
      },
      {
        id: "vc-1-3",
        question: "You want your team to share the same debugger settings and extension recommendations for this project, committed alongside the code. What is the .vscode/ folder designed to hold?",
        options: ["Stores compiled output for VS Code plugins", "Contains project-specific VS Code settings, launch configs, and recommended extensions", "Holds VS Code installation files", "Caches extension telemetry"],
        answer: "Contains project-specific VS Code settings, launch configs, and recommended extensions",
        explanation: "The .vscode/ folder lets you commit editor settings that apply only to this project — like debugger launch configs or workspace-level formatting rules.",
        detail: ".vscode/settings.json overrides user settings for this project. .vscode/launch.json configures debug runs. .vscode/extensions.json can recommend extensions to teammates who open the project. Committing .vscode/ is common for team consistency — just don't commit personal preferences like your theme."
      },
      {
        id: "vc-1-4",
        question: "You hear developers talking about a tool that doesn't just suggest code — it actually reads your files, runs your tests, edits code, and commits changes, all from a terminal conversation. What are they describing?",
        options: ["A VS Code color theme", "An AI coding assistant CLI by Anthropic that operates in your terminal", "A GitHub Actions workflow template", "A VS Code plugin for code linting"],
        answer: "An AI coding assistant CLI by Anthropic that operates in your terminal",
        explanation: "Claude Code is Anthropic's agentic coding tool that runs in your terminal, can read and edit files, run commands, and help build software through conversation.",
        detail: "Claude Code differs from chat-based AI assistants because it operates directly on your filesystem and can take multi-step actions autonomously. It can create files, run tests, commit code, and more — all from a single conversation. It's designed for developers who want AI deeply integrated into their workflow."
      },
      {
        id: "vc-1-5",
        question: "You need to rename the same variable in 15 places across your file at once. VS Code lets you place multiple cursors simultaneously. Which of these methods achieves that?",
        options: ["Alt+Click / Option+Click", "Ctrl+D / Cmd+D", "Shift+Alt+I / Shift+Option+I", "All of the above"],
        answer: "All of the above",
        explanation: "VS Code offers several ways to place multiple cursors: alt-click for manual placement, Ctrl+D to select the next match, or Shift+Alt+I to add cursors at the end of every selected line.",
        detail: "Multi-cursor is one of VS Code's most powerful editing features. Ctrl+Shift+L selects all occurrences of the current word at once. Ctrl+Alt+Down (or Up) adds a cursor on the line below/above. Mastering multi-cursor can replace many find-and-replace operations with direct visual edits."
      },
      {
        id: "vc-1-6",
        question: "Claude Code keeps guessing at your project's tech stack and conventions. A colleague suggests adding a CLAUDE.md file. What does it do?",
        options: ["Configures the Claude API key", "Provides persistent project context and instructions that Claude Code reads at the start of every session", "Stores conversation history", "Sets the Claude model version to use"],
        answer: "Provides persistent project context and instructions that Claude Code reads at the start of every session",
        explanation: "CLAUDE.md is a project-level instruction file. Claude Code automatically reads it to understand conventions, architecture, and preferences before taking any action.",
        detail: "A good CLAUDE.md includes: project overview, tech stack, common commands (build, test, lint), coding conventions, and things to avoid. Think of it like a README for Claude — the more context you give it, the more accurate its actions will be. It can exist globally (~/.claude/CLAUDE.md) or per-project."
      },
      {
        id: "vc-1-7",
        question: "You're in your terminal inside your project folder and want to open VS Code there without using the GUI. What command do you run?",
        options: ["vscode .", "open . --vscode", "code .", "studio ."],
        answer: "code .",
        explanation: "The code CLI command opens VS Code. Adding . opens it in the current directory. This requires the 'Install code command in PATH' shell command to be set up.",
        detail: "To enable the `code` command, open VS Code, press Cmd+Shift+P, and run 'Shell Command: Install code command in PATH'. On Windows it's installed automatically. You can also do `code myfile.js` to open a specific file, or `code --diff file1 file2` to open a diff view."
      },
      {
        id: "vc-1-8",
        question: "As you type a function call in VS Code, a popup appears showing the parameter names, their types, and a description — without you pressing anything. What is this feature called?",
        options: ["A built-in AI model", "Code completion, parameter hints, and symbol documentation as you type", "An intelligent file search algorithm", "Automatic bug detection"],
        answer: "Code completion, parameter hints, and symbol documentation as you type",
        explanation: "IntelliSense is VS Code's umbrella term for smart completions, method signatures, and inline docs powered by the language server.",
        detail: "IntelliSense is powered by Language Server Protocol (LSP). Each language has its own language server (e.g., Pylance for Python, tsserver for TypeScript) that provides rich completions, go-to-definition, find-all-references, and more. Extensions can extend or add IntelliSense for any language."
      }
    ]
  },

  {
    track: "VS Code & Claude Code",
    level: 2,
    lesson: {
      title: "Configuration, LSP & Agentic AI",
      body: [
        "VS Code has a layered settings hierarchy: default → user (global, stored in your home directory) → workspace (project-level, stored in .vscode/settings.json) → folder (for multi-root workspaces). More specific settings always win. This means you can enforce a team-wide tab size of 2 in .vscode/settings.json without touching anyone's personal config. The .editorconfig file is a separate, cross-editor standard for raw whitespace rules (indentation, line endings) — read natively by VS Code, IntelliJ, Vim, and most other editors.",
        "Language Server Protocol (LSP), created by Microsoft in 2016, solved the N×M integration problem: before it, every editor had to build language support from scratch for every language. LSP defines a JSON-RPC interface for completions, diagnostics, go-to-definition, and refactoring. Now a single Python language server works across every editor that speaks LSP. Claude Code's agentic mode builds on this kind of tooling: rather than just generating text, it plans and executes multi-step tasks — reading files, running tests, fixing bugs, and committing, all autonomously in response to a single goal.",
        "MCP (Model Context Protocol) is an open standard that extends Claude Code with new tools without modifying Claude itself. You configure MCP servers in .claude/settings.json: a Postgres server lets Claude query your database; a Playwright server gives it browser control; a custom server can wrap your internal API. Claude Code's permission system protects against unintended destructive actions — it prompts before running shell commands or deleting files. VS Code's Remote Development extensions (Remote-SSH, Dev Containers, WSL) run the VS Code server inside a container or remote machine, eliminating environment inconsistencies entirely."
      ],
      example: {
        label: "Workspace settings for consistent formatting:",
        code: "// .vscode/settings.json\n{\n  \"editor.tabSize\": 2,\n  \"editor.formatOnSave\": true,\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"\n}"
      }
    },
    questions: [
      {
        id: "vc-2-1",
        question: "You want Claude Code to query your Postgres database directly during a session, without you manually pasting query results. You configure a tool server in settings.json. What is this called?",
        options: ["A remote build server", "A Model Context Protocol server that extends Claude's capabilities with new tools and resources", "A version of Claude running on-premise", "A middleware proxy for Claude API calls"],
        answer: "A Model Context Protocol server that extends Claude's capabilities with new tools and resources",
        explanation: "MCP servers give Claude Code access to new tools — like database queries, browser automation, or custom APIs — without modifying Claude itself.",
        detail: "Model Context Protocol (MCP) is an open standard for connecting AI models to external data sources and tools. You configure MCP servers in settings.json. Examples include a Postgres MCP server (lets Claude query your DB), a Playwright server (browser control), or a custom server that wraps your internal API."
      },
      {
        id: "vc-2-2",
        question: "Your Claude Code session has been running for an hour. Responses are getting slower and less focused. You suspect the context window is filling up. What does `/clear` do to help?",
        options: ["Clears your terminal screen", "Resets the conversation context, freeing up the context window", "Deletes all files created in the session", "Logs you out of Claude"],
        answer: "Resets the conversation context, freeing up the context window",
        explanation: "/clear wipes the current conversation history so Claude starts fresh, which is useful after a long session or when switching to a new task.",
        detail: "AI models have a context window — a limit on how much text (conversation + files) they can process at once. Long sessions fill this up, degrading response quality. /clear is the manual way to reset. Claude Code also supports /compact to summarise and compress the history instead of wiping it."
      },
      {
        id: "vc-2-3",
        question: "Your team has a project-wide rule: 2-space indentation, format on save. You commit these to .vscode/settings.json. What type of settings are these, and how do they relate to each developer's personal VS Code config?",
        options: ["User settings are temporary; workspace settings are permanent", "Workspace settings apply to one project (stored in .vscode/); user settings apply globally to all projects", "They are identical but stored in different formats", "Workspace settings override user settings only on Windows"],
        answer: "Workspace settings apply to one project (stored in .vscode/); user settings apply globally to all projects",
        explanation: "VS Code has a settings hierarchy: user (global defaults), workspace (project-level overrides), and folder (for multi-root workspaces).",
        detail: "Settings cascade from most specific to most general: folder > workspace > user > default. This means a workspace setting like \"editor.tabSize\": 2 applies to the project regardless of what the developer has set globally. Useful for enforcing consistent formatting in a team without touching anyone's personal config."
      },
      {
        id: "vc-2-4",
        question: "You install a Python language server and find it works in VS Code, Neovim, and Emacs without any extra setup per editor. What standard makes one language tool work across many editors?",
        options: ["A network protocol for syncing code between editors", "A standard interface that decouples language tooling from editor implementation, so one tool works in many editors", "A protocol for streaming AI completions", "A file format for storing language grammars"],
        answer: "A standard interface that decouples language tooling from editor implementation, so one tool works in many editors",
        explanation: "LSP means a Python language server built once works in VS Code, Neovim, Emacs, etc. — avoiding the N×M integration problem of N tools × M editors.",
        detail: "Before LSP (created by Microsoft in 2016), every editor had to build language support from scratch. LSP defines a JSON-RPC interface for completions, hover docs, diagnostics, refactoring, and more. It's one of the most impactful open-source standards in developer tooling history."
      },
      {
        id: "vc-2-5",
        question: "Claude Code is about to run a shell command that will delete some files. Instead of doing it silently, it stops and asks for your approval. Why does it do this?",
        options: ["Rate limiting API calls", "Claude performing destructive file or system operations without user approval", "Unauthorized access to Claude's model weights", "Hallucinations in code output"],
        answer: "Claude performing destructive file or system operations without user approval",
        explanation: "Claude Code prompts for permission before taking risky actions (deleting files, running shell commands, etc.) so you stay in control of your system.",
        detail: "The permission model has three modes: auto-approve safe actions, ask for each action, and block all shell commands. You can configure allowed commands in .claude/settings.json. This design reflects the principle that AI agents should be powerful but auditable — every action should be explainable and reversible where possible."
      },
      {
        id: "vc-2-6",
        question: "Your team uses VS Code, IntelliJ, and Vim. You want everyone's editor to use 2-space indentation and Unix line endings, without touching each person's individual editor config. What does .editorconfig make possible?",
        options: ["Configures the Monaco editor engine", "Enforces consistent coding styles (indentation, line endings) across different editors and IDEs", "Manages VS Code extension settings", "Defines snippets for code templates"],
        answer: "Enforces consistent coding styles (indentation, line endings) across different editors and IDEs",
        explanation: ".editorconfig is a cross-editor standard that sets rules like indent_size and end_of_line, ensuring consistency regardless of which editor a developer uses.",
        detail: ".editorconfig is read by VS Code, IntelliJ, Vim, Sublime, and most major editors natively or via plugin. It's different from ESLint/Prettier (which enforce language-specific rules) — EditorConfig handles raw whitespace and file encoding. When both exist, they complement each other."
      },
      {
        id: "vc-2-7",
        question: "You give Claude Code a single instruction: 'Add authentication to this Express app.' It reads your codebase, writes the middleware, updates routes, runs the tests, fixes failures, and commits — all on its own. What makes this possible?",
        options: ["It uses a different model", "It can take sequences of actions autonomously (read files, run commands, edit code) rather than just generating text", "It requires no internet connection", "It only works with Python projects"],
        answer: "It can take sequences of actions autonomously (read files, run commands, edit code) rather than just generating text",
        explanation: "Agentic mode means Claude can plan and execute multi-step tasks — not just tell you what to do, but actually do it.",
        detail: "Traditional AI chat: you ask, it answers, you implement. Agentic AI: you set a goal, it plans steps, executes tools, checks results, and iterates. Claude Code can open files, run test suites, interpret output, fix bugs, and commit — all in one session. This shifts AI from advisor to collaborator."
      },
      {
        id: "vc-2-8",
        question: "You want to write code locally in VS Code but have it execute inside a Docker container — same environment as production, no 'works on my machine' issues. What does the Remote Development extension pack enable?",
        options: ["Streaming code to a remote display", "Developing inside Docker containers, SSH-connected servers, or WSL as if they were local", "Syncing settings across multiple local machines", "Remote pair programming with real-time cursor sharing"],
        answer: "Developing inside Docker containers, SSH-connected servers, or WSL as if they were local",
        explanation: "Remote Development runs the VS Code server in a remote environment, so you edit and debug as if you're local — but all execution happens remotely.",
        detail: "The three extensions are Remote-SSH, Dev Containers (Docker), and WSL (Windows Subsystem for Linux). Dev Containers is especially powerful: a .devcontainer/devcontainer.json file defines a reproducible dev environment. Anyone who opens the repo gets the same container — no 'works on my machine' problems."
      }
    ]
  },

  {
    track: "VS Code & Claude Code",
    level: 3,
    lesson: {
      title: "Advanced: Hooks, Caching & Subagents",
      body: [
        "Prompt caching stores the processed KV-cache representation of large system prompts or context prefixes so they don't need to be recomputed on every API call. When your CLAUDE.md or system prompt is the same across many requests, Anthropic charges significantly less for cache hits and responds faster. Cache entries have a 5-minute TTL — a loop that sleeps beyond 300 seconds will incur a full cache miss on the next wake. Claude Code's harness uses caching to maintain context efficiently across long sessions without re-processing the same project context repeatedly.",
        "Hooks in .claude/settings.json are shell commands that the harness executes automatically before or after specific Claude Code events. A PostToolUse hook on the Write tool can run Prettier on every file Claude edits, enforcing formatting without any manual step. Hooks run in your shell and their output is piped back into the session — this is how automated behaviors work. Unlike memory or preferences (which Claude applies inconsistently), hooks are deterministic: the harness runs them every time, regardless of what Claude decides.",
        "Semantic tokens give language servers' full type-and-scope awareness to syntax highlighting. Traditional highlighting is regex-based and colorises by token class (keyword, string). Semantic highlighting distinguishes a local variable from a class property, marks undefined symbols in red, and highlights a method differently from a field — but requires a language server capable enough to analyse the full program. Subagents in Claude Code are parallel Claude instances spawned to handle independent subtasks, such as searching different parts of a large codebase simultaneously. Each subagent starts cold with no shared memory — the prompt must be entirely self-contained — and its results are summarised back into the parent context."
      ],
      example: {
        label: "PostToolUse hook that formats every file Claude writes:",
        code: "// .claude/settings.json\n{\n  \"hooks\": {\n    \"PostToolUse\": [\n      {\n        \"matcher\": \"Write\",\n        \"hooks\": [{\"type\": \"command\", \"command\": \"prettier --write \\\"$CLAUDE_TOOL_INPUT_FILE_PATH\\\"\"}]\n      }\n    ]\n  }\n}"
      }
    },
    questions: [
      {
        id: "vc-3-1",
        question: "You're building an app that sends Claude a 10,000-token system prompt on every API call. You notice some calls are significantly cheaper and faster than others. What mechanism is responsible?",
        options: ["Storing responses in a browser cache", "Caching the processed representation of large system prompts to reduce latency and cost on repeated calls", "Saving prompt templates to a file", "Compressing prompts before sending"],
        answer: "Caching the processed representation of large system prompts to reduce latency and cost on repeated calls",
        explanation: "Prompt caching stores the expensive KV computation for a prefix, so subsequent requests that share that prefix are faster and cheaper.",
        detail: "When you have a large CLAUDE.md or system prompt that's the same across many API calls, caching it means the model doesn't re-process those tokens every time. Anthropic charges significantly less for cache hits. Cache entries have a 5-minute TTL. For Claude Code specifically, the harness uses caching to maintain context efficiently across long sessions."
      },
      {
        id: "vc-3-2",
        question: "Every time Claude edits a file, you want Prettier to run on it automatically — without asking Claude to remember to do it. You configure this in .claude/settings.json. What feature makes this possible?",
        options: ["Webhooks to notify Anthropic of usage", "Shell commands that automatically execute before or after specific Claude Code events (like after a file edit)", "Plugin APIs for extending VS Code", "Health checks for MCP servers"],
        answer: "Shell commands that automatically execute before or after specific Claude Code events (like after a file edit)",
        explanation: "Hooks let you automate reactions to Claude Code actions — e.g., run tests after Claude edits a file, or format code after each write.",
        detail: "Example: a PostToolUse hook on Write tool calls could run prettier --write on every file Claude edits. Hooks run in your shell and their output feeds back into the session. This is the mechanism behind 'automated behaviors' — the harness executes them, not Claude's memory, so they're reliable across sessions."
      },
      {
        id: "vc-3-3",
        question: "Your VS Code highlights a local variable and a class property with the same color. After installing a language server with semantic token support, they appear in different colors. What changed?",
        options: ["Syntax highlighting based on grammar rules", "Richer, type-aware highlighting where colors reflect what a token *means* (e.g., a local variable vs. a class property)", "Tokenization of strings for AI completion", "Token counting for LLM context management"],
        answer: "Richer, type-aware highlighting where colors reflect what a token *means* (e.g., a local variable vs. a class property)",
        explanation: "Semantic tokens go beyond syntax patterns — the language server understands your code's types and scope, providing more accurate and meaningful coloring.",
        detail: "Traditional syntax highlighting is regex/grammar-based and colorizes by token type (keyword, string, comment). Semantic highlighting uses full language analysis: it can distinguish a parameter from a local variable, mark undefined symbols in red, or highlight a field differently from a method. Requires a capable language server."
      },
      {
        id: "vc-3-4",
        question: "You ask Claude Code to search a large codebase across 20 different modules simultaneously. Instead of doing it sequentially and filling its context, it spawns multiple instances to work in parallel. What are these called?",
        options: ["Smaller Claude models for cheaper tasks", "Parallel Claude instances spawned to handle independent subtasks, protecting the main context window", "Background workers for file watching", "API rate limit bypass mechanisms"],
        answer: "Parallel Claude instances spawned to handle independent subtasks, protecting the main context window",
        explanation: "Subagents run in parallel on independent tasks (like searching different parts of a codebase) so results land back in the main session without overwhelming its context.",
        detail: "The main agent spawns subagents for work that's isolated and expensive to do inline — large codebase searches, independent research, or parallel code generation. Each subagent starts cold (no shared memory with the parent) so the prompt must be self-contained. Results are summarised back into the parent's context."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // TRACK: Building & Shipping
  // ═══════════════════════════════════════════════════════════════

  {
    track: "Building & Shipping",
    level: 1,
    lesson: {
      title: "From Code to Running App",
      body: [
        "Shipping software requires more than writing code. You need to manage dependencies, configure your app for each environment, and automate quality checks. In a Node.js project, package.json is the manifest: it lists dependencies (needed in production), devDependencies (tools like linters and test runners), and scripts (shortcuts like npm run build). npm install reads it and downloads everything into node_modules — never committed to Git. For reproducible installs in CI pipelines, prefer npm ci, which uses the lock file exactly and fails if anything is out of sync.",
        "Environment variables (stored in .env files, loaded by libraries like dotenv) keep secrets and environment-specific config — API keys, database URLs, feature flags — out of source code. .env should always be in .gitignore. A .env.example file with placeholder values documents what variables the app needs without exposing real secrets. A Dockerfile packages your app and all its runtime dependencies into a portable container image that runs identically on any machine with Docker installed. Semantic versioning (MAJOR.MINOR.PATCH) signals the type of each release: breaking change, new feature, or bug fix.",
        "CI/CD (Continuous Integration / Continuous Deployment) automates the path from commit to production. CI runs your build and tests automatically on every push, catching integration bugs before they reach teammates. CD extends this by automatically deploying passing builds. Linting (ESLint, Ruff) catches logical errors and style violations; formatting (Prettier, Black) enforces consistent whitespace — both should run in CI. Production is the live environment serving real users; most teams also maintain staging (production-like, for final validation) and local development environments."
      ],
      example: {
        label: "Install dependencies and run tests:",
        code: "npm install\nnpm run lint\nnpm test\nnpm run build"
      }
    },
    questions: [
      {
        id: "bs-1-1",
        question: "Every time your team pushes code, tests run automatically on GitHub. When they pass, the code is automatically deployed to production. What is this practice called?",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment (or Delivery)", "Container Infrastructure / Container Delivery", "Central Instance / Core Distribution"],
        answer: "Continuous Integration / Continuous Deployment (or Delivery)",
        explanation: "CI automatically builds and tests code on every push. CD automatically deploys passing builds to staging or production.",
        detail: "CI catches integration bugs early by merging small, frequent changes and running automated tests. CD extends this by automating deployment, reducing the time between writing code and it reaching users. Tools include GitHub Actions, CircleCI, Jenkins, and GitLab CI. Together, they form the backbone of modern software delivery."
      },
      {
        id: "bs-1-2",
        question: "A new developer joins your Node.js project and asks where to find what packages are needed, what scripts to run, and what the project is called. Which file has all of that?",
        options: ["A compiled binary package", "A Node.js project manifest that lists dependencies, scripts, and metadata", "A JSON export of a database schema", "A config file for shipping Docker images"],
        answer: "A Node.js project manifest that lists dependencies, scripts, and metadata",
        explanation: "package.json is the heart of any Node.js project — it lists what packages are needed, defines run scripts, and identifies the project.",
        detail: "Key fields: name and version (project identity), dependencies (required for production), devDependencies (build/test tools), and scripts (shortcuts like npm run build). The package-lock.json or yarn.lock file pins exact dependency versions for reproducible installs across environments."
      },
      {
        id: "bs-1-3",
        question: "Your app needs a Stripe API key for production and a test key for local dev — and neither can be committed to Git. Where do these values live, and why?",
        options: ["To store compiled code", "To configure runtime behaviour (API keys, database URLs) outside of source code", "To define CSS variables", "To set the Node.js version"],
        answer: "To configure runtime behaviour (API keys, database URLs) outside of source code",
        explanation: "Environment variables keep secrets and environment-specific config out of your codebase — production and development can have different values without code changes.",
        detail: "The .env file is loaded by libraries like dotenv and should never be committed to Git (add to .gitignore). A .env.example file with placeholder values (no real secrets) is often committed to document what variables the app needs. In production, set env vars via your hosting platform rather than deploying a .env file."
      },
      {
        id: "bs-1-4",
        question: "You clone a Node.js project to your machine. There's a package.json but no node_modules/ folder. What does running `npm install` do?",
        options: ["Installs Node.js itself", "Downloads and installs all packages listed in package.json into node_modules", "Updates packages to latest versions", "Runs the application"],
        answer: "Downloads and installs all packages listed in package.json into node_modules",
        explanation: "npm install reads package.json (and package-lock.json for exact versions) and downloads all dependencies into the node_modules folder.",
        detail: "node_modules is never committed to Git (it can contain hundreds of thousands of files). Anyone cloning the repo runs npm install to rebuild it. npm ci (clean install) is preferred in CI pipelines because it uses the lock file precisely and fails if package.json and package-lock.json are out of sync."
      },
      {
        id: "bs-1-5",
        question: "You want your app to run identically on every developer's machine and on production, regardless of what OS or libraries they have installed. What does a Dockerfile let you define?",
        options: ["A diagram of Docker's architecture", "A text script that defines how to build a Docker container image", "A config file for Docker networking", "A log file from Docker daemon"],
        answer: "A text script that defines how to build a Docker container image",
        explanation: "A Dockerfile is a set of instructions (FROM, RUN, COPY, CMD, etc.) that Docker reads to build a reproducible image of your application.",
        detail: "A container image bundles your app and all its dependencies into a portable unit that runs identically everywhere. Key instructions: FROM (base image), COPY (add files), RUN (execute commands during build), EXPOSE (document ports), CMD (default start command). Multi-stage builds use multiple FROM statements to produce lean final images."
      },
      {
        id: "bs-1-6",
        question: "You see a package update from v2.1.3 to v3.0.0 and another from v2.1.3 to v2.2.0. What do these version number changes tell you about what changed in each?",
        options: ["Versioning based on release dates", "A MAJOR.MINOR.PATCH numbering scheme where each part signals the type of change", "A Git tagging convention for release branches", "An npm-specific versioning system"],
        answer: "A MAJOR.MINOR.PATCH numbering scheme where each part signals the type of change",
        explanation: "MAJOR = breaking change, MINOR = new backward-compatible feature, PATCH = backward-compatible bug fix. E.g., 2.1.3.",
        detail: "SemVer (semver.org) allows package consumers to safely upgrade. npm uses it with range operators: ^2.1.3 allows minor/patch updates, ~2.1.3 allows only patch updates, and 2.1.3 pins the exact version. Pre-release versions use suffixes like -alpha.1 or -beta.2. Understanding SemVer helps you make safe upgrade decisions."
      },
      {
        id: "bs-1-7",
        question: "Your CI pipeline runs two separate tools: one warns you about a potential null reference, the other rewrites your tabs to spaces. What is each tool doing?",
        options: ["They are the same thing", "Linting finds logical/style errors; formatting automatically adjusts whitespace and layout", "Linting runs at runtime; formatting runs at compile time", "Linting is for CSS; formatting is for JavaScript"],
        answer: "Linting finds logical/style errors; formatting automatically adjusts whitespace and layout",
        explanation: "A linter (like ESLint) flags potential bugs and style violations; a formatter (like Prettier) automatically rewrites code to a consistent style.",
        detail: "Linting catches things like unused variables, missing return types, or forbidden patterns. Formatting handles tabs vs. spaces, line length, and bracket placement. Running both is standard: the linter catches what formatting can't, and the formatter removes subjective whitespace debates from code review. Many teams run both on save and as CI checks."
      },
      {
        id: "bs-1-8",
        question: "Your app has passed all tests and is approved. You run the deploy command. Where does your code go, and who can now interact with it?",
        options: ["Merging a pull request", "Making your application available to real users on live infrastructure", "Running end-to-end tests", "Tagging a release in Git"],
        answer: "Making your application available to real users on live infrastructure",
        explanation: "Production is the live environment where real users interact with your app. Deploying means pushing new code there.",
        detail: "Most teams have multiple environments: development (local), staging (production-like for testing), and production (live). Deployments to staging are cheap; production deployments carry risk. Best practices: feature flags to control rollouts, observability (logs, metrics, alerts), and a rollback plan in case things go wrong."
      }
    ]
  },

  {
    track: "Building & Shipping",
    level: 2,
    lesson: {
      title: "Infrastructure, Scaling & Reliability",
      body: [
        "Production infrastructure has layers. A reverse proxy like Nginx sits at the front, terminating HTTPS (so your app servers don't need to handle TLS), serving static files from cache, and routing requests to the right backend. Behind it, a load balancer distributes traffic across multiple server instances using algorithms like round-robin or least-connections. Vertical scaling (adding CPU/RAM to one server) has limits and creates a single point of failure. Horizontal scaling (adding more instances) is resilient and near-unlimited, but requires stateless app design — sessions must live in Redis or a database, not in the process's memory.",
        "GitHub Actions are YAML-defined workflows stored in .github/workflows/ that trigger on repository events (push, pull request, schedule). They automate your CI/CD: run tests, build Docker images, deploy to staging, and gate production deploys behind manual approval. Infrastructure as Code (IaC) — tools like Terraform, Pulumi, or AWS CDK — lets you define servers, databases, and networks in version-controlled files. Run terraform apply and your infrastructure is created; check in a change and your team reviews it like code. This prevents configuration drift and makes disaster recovery as simple as running a script.",
        "Feature flags decouple deployment from release: code ships to production but a feature stays off until you flip the switch, enabling canary releases (1% of users first), A/B tests, and instant kill switches for broken features. A monorepo stores multiple related services in one repository, making atomic cross-service changes possible and dependency management consistent. A staging environment mirrors production as closely as possible — same infrastructure size, same environment variables with test credentials, real data snapshots — so CI can deploy there automatically and you can validate before touching live users."
      ],
      example: {
        label: "Minimal GitHub Actions CI workflow:",
        code: "# .github/workflows/ci.yml\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm test"
      }
    },
    questions: [
      {
        id: "bs-2-1",
        question: "Your Node.js app runs on port 3000 but needs to serve HTTPS on port 443, cache static files, and route to multiple backend services. What sits in front of your app to handle all of this?",
        options: ["To run Node.js applications", "To sit in front of application servers, handling SSL termination, load balancing, and static file serving", "To provide a database connection pool", "To run Docker containers"],
        answer: "To sit in front of application servers, handling SSL termination, load balancing, and static file serving",
        explanation: "A reverse proxy is the public-facing entry point that distributes traffic, handles HTTPS, and protects backend servers from direct exposure.",
        detail: "Nginx handles HTTPS (terminates TLS so backends don't need to), caches and serves static assets efficiently, and routes requests to the right backend service. It can also rate-limit requests, compress responses, and provide a layer of security. Alternatives include Caddy (automatic HTTPS) and HAProxy (load balancing focus)."
      },
      {
        id: "bs-2-2",
        question: "Every time your team opens a pull request, tests run automatically and a Slack notification fires — all configured in a YAML file in your repo. What is this called?",
        options: ["A GitHub keyboard shortcut", "An automated workflow that runs on GitHub's infrastructure in response to repository events", "A GitHub CLI command", "A webhook endpoint"],
        answer: "An automated workflow that runs on GitHub's infrastructure in response to repository events",
        explanation: "GitHub Actions are YAML-defined workflows triggered by events (push, PR, schedule) that can run tests, build images, deploy code, and more.",
        detail: "Actions are defined in .github/workflows/*.yml. A workflow has triggers (on: push), jobs (run on a VM), and steps (individual commands or reusable Actions from the marketplace). Actions marketplace has 10,000+ pre-built actions. They're GitHub's answer to external CI tools, tightly integrated with PRs and commits."
      },
      {
        id: "bs-2-3",
        question: "Your web app is struggling under peak traffic. You could upgrade to a bigger server, or add more servers behind a load balancer. What do these two approaches represent?",
        options: ["Horizontal = faster CPUs; vertical = more servers", "Vertical = adding more CPU/RAM to one server; horizontal = adding more server instances", "They are cloud-provider-specific terms for the same concept", "Horizontal scaling requires Kubernetes; vertical does not"],
        answer: "Vertical = adding more CPU/RAM to one server; horizontal = adding more server instances",
        explanation: "Scale up (vertical) by upgrading the machine; scale out (horizontal) by adding more machines behind a load balancer.",
        detail: "Vertical scaling has limits (there's only so much RAM you can add) and creates a single point of failure. Horizontal scaling is more resilient and can scale to near-unlimited capacity, but requires stateless application design (sessions in Redis, not in-memory). Most modern cloud architectures prefer horizontal scaling with auto-scaling groups."
      },
      {
        id: "bs-2-4",
        question: "You've shipped a new checkout redesign to production, but only your internal team can see it. The code is live, but users don't get it until you flip a switch. What mechanism makes this possible?",
        options: ["A Git tag for a feature branch", "A runtime toggle that enables or disables a feature without deploying new code", "A CSS class for feature highlighting", "A permission level in a SaaS product"],
        answer: "A runtime toggle that enables or disables a feature without deploying new code",
        explanation: "Feature flags decouple deployment from release — code ships to production but a feature stays off until you're ready to turn it on for users.",
        detail: "Feature flags enable canary releases (roll out to 1% of users first), A/B testing, kill switches (turn off a broken feature instantly), and developer access to unfinished features. Tools include LaunchDarkly, Unleash, and GrowthBook. The trade-off: flags add complexity and must be cleaned up once features ship fully."
      },
      {
        id: "bs-2-5",
        question: "Your production database was configured manually through a web console 18 months ago. Nobody remembers the exact settings. A teammate says the solution is IaC. What does that mean?",
        options: ["Writing application code that creates databases", "Defining and provisioning cloud infrastructure using code and configuration files rather than manual UI clicks", "Storing infrastructure diagrams in Git", "Compiling server configurations into binaries"],
        answer: "Defining and provisioning cloud infrastructure using code and configuration files rather than manual UI clicks",
        explanation: "IaC tools like Terraform and AWS CDK let you define servers, databases, and networking in version-controlled files that can be applied, reviewed, and rolled back like code.",
        detail: "IaC makes infrastructure reproducible and auditable. A Terraform file describes your desired AWS state; terraform apply makes it real. Benefits: no configuration drift (prod matches what's in code), easy disaster recovery (rebuild from scratch by running the code), and code review for infrastructure changes. Alternatives: Pulumi (TypeScript/Python), AWS CloudFormation."
      },
      {
        id: "bs-2-6",
        question: "Your company keeps its frontend, backend, and shared component library in separate repos. Every cross-team change requires coordinating three PRs. A colleague suggests a monorepo. What does that change?",
        options: ["A single-branch Git workflow", "A single repository that contains multiple related projects or services, sharing tooling and dependencies", "A repository with a single large commit", "A mono-cloud infrastructure strategy"],
        answer: "A single repository that contains multiple related projects or services, sharing tooling and dependencies",
        explanation: "Monorepos keep related code (frontend, backend, shared libs) in one repo, making cross-project changes atomic and dependency management consistent.",
        detail: "Companies like Google, Meta, and Microsoft run massive monorepos. Tools like Nx, Turborepo, and Bazel add build caching and task orchestration to make them fast. The alternative (polyrepo) is simpler to start but harder to keep in sync across services. Monorepos shine when teams share a lot of code."
      },
      {
        id: "bs-2-7",
        question: "Your app runs on 5 servers. You need incoming requests spread across all of them, and if one crashes, traffic should automatically route to the others. What component provides this?",
        options: ["Monitors server CPU and memory", "Distributes incoming network traffic across multiple backend servers", "Compresses HTTP responses", "Manages SSL certificates"],
        answer: "Distributes incoming network traffic across multiple backend servers",
        explanation: "A load balancer sits in front of your servers and routes each request to one of them, spreading the load and providing failover if a server goes down.",
        detail: "Common algorithms: round-robin (evenly cycles through servers), least-connections (sends to the least-busy server), and IP hash (same client always hits the same server — useful for session stickiness). Cloud providers offer managed load balancers (AWS ALB, GCP Cloud Load Balancing) that handle SSL and health checks automatically."
      },
      {
        id: "bs-2-8",
        question: "You're about to deploy a database migration to production. Your team insists on running it in staging first. A junior dev asks why staging exists when you already have a test suite. What do you tell them?",
        options: ["A local development environment", "A production-like environment for final testing before deploying to live users", "A Git branch for feature development", "An environment for running unit tests"],
        answer: "A production-like environment for final testing before deploying to live users",
        explanation: "Staging mirrors production as closely as possible, letting you catch integration issues, test migrations, and validate behaviour before real users are affected.",
        detail: "A good staging environment has the same infrastructure size, same environment variables (with test credentials), and real data snapshots. CI pipelines typically deploy to staging automatically after tests pass, with a manual approval gate before production. The closer staging is to production, the more reliable your confidence in a release."
      }
    ]
  },

  {
    track: "Building & Shipping",
    level: 3,
    lesson: {
      title: "Zero-Downtime Deploys & Distributed Systems",
      body: [
        "Blue-green deployment runs two identical production environments simultaneously. The live environment (blue) serves all traffic while the new version (green) is deployed and validated. A single load balancer switch moves traffic to green instantly — zero downtime, and instant rollback if problems emerge (flip back to blue). The cost is 2× infrastructure while both environments are live. Canary deployment is a cheaper variant: gradually route a small percentage of traffic to the new version, monitor error rates and latency, and either roll forward or back incrementally. Both strategies decouple deployment risk from deployment frequency.",
        "The 12-factor app methodology (12factor.net) defines how to build portable, scalable SaaS. One of its most important principles is stateless processes: each process should store no shared session state locally. If your app stores sessions in-memory, you cannot scale horizontally — request 2 might hit a different instance with no session. Moving state to backing services (Redis for sessions, PostgreSQL for persistent data) makes every instance interchangeable, enabling auto-scaling and container orchestration. Twelve-factor is the design philosophy behind why modern cloud-native apps can run in Kubernetes pods that restart freely.",
        "DORA (DevOps Research and Assessment) identified four metrics that reliably predict software delivery performance: Deployment Frequency, Lead Time for Changes, Mean Time to Restore, and Change Failure Rate. Elite teams deploy multiple times per day with sub-hour recovery from incidents. In distributed systems, eventual consistency is a consistency model where nodes may temporarily hold different data but are guaranteed to converge over time — the trade-off accepted for high availability and partition tolerance per the CAP theorem. DNS propagation, shopping cart totals across data centres, and social media like counts are all eventually consistent by design."
      ],
      example: {
        label: "DORA's four key metrics at a glance:",
        code: "Deployment Frequency   → How often you ship to production\nLead Time for Changes  → Commit to production time\nMean Time to Restore   → How fast you recover from incidents\nChange Failure Rate    → % of deploys that cause incidents"
      }
    },
    questions: [
      {
        id: "bs-3-1",
        question: "You need to deploy a major update with zero downtime and the ability to instantly roll back if anything breaks. Your infrastructure team suggests a blue-green approach. How does it work?",
        options: ["Deploying to different geographic regions", "Running two identical production environments (blue = live, green = new), switching traffic when ready", "A Git branching strategy", "A Kubernetes pod restart strategy"],
        answer: "Running two identical production environments (blue = live, green = new), switching traffic when ready",
        explanation: "Blue-green deployments allow instant rollback — if green has problems, flip the load balancer back to blue and no one notices.",
        detail: "The key benefit is zero-downtime deployment and instant rollback. The cost is running two full environments simultaneously (2× infrastructure cost). A cheaper variant is canary deployment: gradually shift a small percentage of traffic to the new version, monitor error rates, and roll forward or back incrementally."
      },
      {
        id: "bs-3-2",
        question: "Your app stores user sessions in-memory. When you add a second server, users randomly get logged out because requests hit different instances. A teammate says this violates 12-factor's stateless process principle. What does that mean?",
        options: ["Apps must have no state at all", "Each process should not store shared session state locally; state belongs in backing services like Redis or a database", "Processes must restart every 12 seconds", "State should be stored in environment variables"],
        answer: "Each process should not store shared session state locally; state belongs in backing services like Redis or a database",
        explanation: "Stateless processes can be started, stopped, or scaled horizontally without data loss because no state lives inside the process itself.",
        detail: "The 12-factor app (12factor.net) is a methodology for building portable, scalable SaaS. If your app stores sessions in-memory, you can't scale horizontally (request 2 might hit a different server with no session). Moving session state to Redis or a database makes all instances interchangeable — a core requirement for auto-scaling and container orchestration."
      },
      {
        id: "bs-3-3",
        question: "Your engineering manager asks you to improve the team's DORA metrics. What does DORA actually measure, and what are its four key metrics?",
        options: ["A DevOps certification body", "A research program measuring engineering effectiveness via deployment frequency, lead time, MTTR, and change failure rate", "A Docker orchestration runtime architecture", "A database operations reliability assessment"],
        answer: "A research program measuring engineering effectiveness via deployment frequency, lead time, MTTR, and change failure rate",
        explanation: "DORA (DevOps Research and Assessment) found these four metrics reliably predict software delivery performance and organisational outcomes.",
        detail: "Deployment Frequency (how often you ship), Lead Time for Changes (commit to production time), Mean Time to Restore (how fast you recover from incidents), Change Failure Rate (% of deployments causing incidents). Elite teams deploy multiple times per day with sub-hour recovery. The annual DORA State of DevOps report benchmarks the industry."
      },
      {
        id: "bs-3-4",
        question: "You update your profile picture on a social platform. A friend in another country still sees your old photo 10 seconds later. There's no bug — this is by design. What consistency model explains it?",
        options: ["A guarantee that all nodes will always have identical data", "A model where nodes may have temporarily different data but will converge to the same state over time", "Consistent hashing for load distribution", "A consistency level in ACID database transactions"],
        answer: "A model where nodes may have temporarily different data but will converge to the same state over time",
        explanation: "Eventual consistency trades immediate consistency for availability and partition tolerance (per the CAP theorem) — data will be consistent, eventually.",
        detail: "Examples: DNS propagation, social media like counts, shopping cart total across data centres. Systems like DynamoDB and Cassandra are eventually consistent by default. Strong consistency (every read sees the latest write) requires coordination that adds latency and reduces availability. Choosing the right consistency level is a core distributed systems design decision."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // TRACK: History of Programming
  // ═══════════════════════════════════════════════════════════════

  {
    track: "History of Programming & Development",
    level: 1,
    lesson: {
      title: "The Pioneers Who Built Computing",
      body: [
        "Computing's theoretical and practical foundations were built by a handful of people in the 19th and 20th centuries. Ada Lovelace wrote the first algorithm intended for execution by a machine in the 1840s — notes for Charles Babbage's mechanical Analytical Engine that included a method for computing Bernoulli numbers. Alan Turing's 1936 paper defined what it means to 'compute': his abstract Turing Machine model proved some problems are mathematically unsolvable, laying the theoretical bedrock for every computer that followed. The programming language Ada, used in safety-critical systems today, was named in her honour.",
        "High-level programming languages transformed what computers could do in practice. FORTRAN (Formula Translation), released by IBM in 1957, was the first to see widespread adoption — it let scientists write mathematical formulas directly as code rather than assembly. Grace Hopper built the first compiler in 1952, proving that human-readable code could be automatically translated to machine instructions — an idea previously thought impossible. She also co-developed COBOL, which still processes billions of dollars in banking and government transactions today. She is also credited with popularising the word 'debugging' after finding a moth trapped in a relay.",
        "The Unix operating system, built at Bell Labs in 1969 by Ken Thompson and Dennis Ritchie, defined the philosophy of composable tools, pipes, and 'everything is a file' — the basis of Linux and macOS. Tim Berners-Lee launched the World Wide Web in 1991 at CERN, combining HTTP, HTML, and URLs and releasing them royalty-free, enabling global adoption. Apple's Macintosh (1984) popularised the Graphical User Interface pioneered at Xerox PARC, making computers accessible to non-programmers for the first time. Richard Stallman's GNU Project (1983) and Linus Torvalds' Linux kernel (1991) established the open source movement."
      ],
      example: {
        label: "The classic first program, in the tradition of Kernighan & Ritchie:",
        code: "// C, 1978\n#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}"
      }
    },
    questions: [
      {
        id: "hp-1-1",
        question: "In the 1840s, someone wrote an algorithm for Charles Babbage's mechanical Analytical Engine — decades before any computer existed. Who is credited as the first programmer?",
        options: ["Alan Turing", "Grace Hopper", "Ada Lovelace", "Charles Babbage"],
        answer: "Ada Lovelace",
        explanation: "Ada Lovelace wrote what is considered the first algorithm intended for execution by a machine — for Charles Babbage's Analytical Engine — in the 1840s.",
        detail: "Ada Lovelace, daughter of poet Lord Byron, collaborated with Babbage and wrote notes that included an algorithm for computing Bernoulli numbers. The programming language Ada, used in safety-critical systems today, was named in her honour. Her notes weren't published until 1953, over a century after they were written."
      },
      {
        id: "hp-1-2",
        question: "In 1952, a US Navy researcher proved that human-readable code could be automatically translated into machine instructions — something most people thought was impossible. She also helped design a language still running banking systems today. What did she contribute?",
        options: ["Invented the transistor", "Created the first compiler and helped develop COBOL", "Designed the first GUI", "Wrote the Unix operating system"],
        answer: "Created the first compiler and helped develop COBOL",
        explanation: "Grace Hopper developed the A-0 compiler in 1952 — the first program that translated symbolic code into machine code — and was central to creating COBOL.",
        detail: "Hopper's key insight was that programs could be written in human-readable language and automatically translated to machine code — previously considered impossible. COBOL (Common Business-Oriented Language) she helped develop still runs billions of dollars in banking and government transactions today. She's also credited with popularising the term 'debugging' after finding an actual moth in a relay."
      },
      {
        id: "hp-1-3",
        question: "In 1957, IBM released a language that let scientists write mathematical formulas directly as code for the first time, rather than writing in assembly. What was it?",
        options: ["C", "COBOL", "FORTRAN", "BASIC"],
        answer: "FORTRAN",
        explanation: "FORTRAN (Formula Translation), developed by IBM in 1957, was the first high-level language to see widespread adoption, initially for scientific computing.",
        detail: "Before FORTRAN, programmers wrote in assembly language or machine code. FORTRAN let scientists write mathematical formulas directly as code, dramatically increasing productivity. Its influence is immense: it pioneered compiler optimisation, and modern Fortran is still used in high-performance scientific and weather modelling today."
      },
      {
        id: "hp-1-4",
        question: "In 1936, a British mathematician published a paper that defined what it means to 'compute' — before any modern computer existed. His theoretical model proved some problems are mathematically unsolvable. What was his key contribution?",
        options: ["Invented the first transistor", "Developed the theoretical foundation of computation with the Turing Machine model and the concept of computability", "Created the C programming language", "Designed the first database system"],
        answer: "Developed the theoretical foundation of computation with the Turing Machine model and the concept of computability",
        explanation: "Turing's 1936 paper defined what it means to 'compute' and proved some problems are unsolvable — foundations that underpin all of computer science.",
        detail: "The Turing Machine is an abstract model of computation, not a real device. From it, Turing defined decidability and the Halting Problem (you cannot write a program that determines if any arbitrary program will halt). During WWII he led the team that cracked Enigma. The Turing Test, proposed in 1950, remains a touchstone for AI."
      },
      {
        id: "hp-1-5",
        question: "A researcher at CERN wanted scientists around the world to share documents instantly over the internet. He invented HTML, HTTP, and URLs — then released them royalty-free. Who built the Web, and when?",
        options: ["1983 by Vint Cerf", "1991 by Tim Berners-Lee", "1995 by Marc Andreessen", "1969 by ARPA"],
        answer: "1991 by Tim Berners-Lee",
        explanation: "Tim Berners-Lee proposed the Web in 1989 and launched the first website in 1991 while at CERN, combining HTTP, HTML, and URLs.",
        detail: "The Internet (TCP/IP networking) predates the Web — ARPANET launched in 1969. The Web is an application on top of the Internet. Berners-Lee invented HTML, HTTP, and the URL all at once and crucially released them royalty-free, enabling explosive adoption. He founded the W3C to maintain web standards and continues advocating for an open web."
      },
      {
        id: "hp-1-6",
        question: "In 1969, two Bell Labs engineers built an OS around small composable tools connected by pipes and the idea that 'everything is a file.' Linux and macOS are direct descendants. What were they building?",
        options: ["The first GUI operating system", "An operating system developed at Bell Labs in 1969 that introduced foundational concepts like pipes, file permissions, and the C language", "IBM's mainframe OS", "The predecessor to MS-DOS"],
        answer: "An operating system developed at Bell Labs in 1969 that introduced foundational concepts like pipes, file permissions, and the C language",
        explanation: "Unix, built by Thompson and Ritchie, defined the 'everything is a file' philosophy and small composable tools connected by pipes — still the basis of Linux and macOS today.",
        detail: "C was created specifically to write Unix portably across hardware. Linux (1991) and macOS (BSD-derived) are Unix descendants. Android runs a Linux kernel. The concepts: standard I/O streams, shell scripting, the filesystem hierarchy, and process management all trace back to Unix. Understanding Unix is understanding the roots of modern computing."
      },
      {
        id: "hp-1-7",
        question: "Apple's 1984 Macintosh replaced text commands with windows, icons, and a mouse. Billions of people who had never typed a command could suddenly use a computer. What did the GUI fundamentally change?",
        options: ["It made computers faster", "It made computers accessible to non-technical users by replacing text commands with visual elements", "It introduced multi-threading", "It enabled networking"],
        answer: "It made computers accessible to non-technical users by replacing text commands with visual elements",
        explanation: "The GUI, pioneered at Xerox PARC and popularised by Apple's Macintosh in 1984, transformed computing from a specialists' tool to a mass-market product.",
        detail: "Xerox PARC researchers built Alto (1973) with windows, icons, a mouse, and menus. Steve Jobs famously visited and built the Macintosh around these ideas. Microsoft's Windows followed in 1985. The shift from CLI to GUI is arguably the most significant democratisation event in computing — it enabled billions of non-programmers to use computers."
      },
      {
        id: "hp-1-8",
        question: "Linus Torvalds released a kernel in 1991 that anyone could read, modify, and redistribute. Today it runs most of the world's servers. What kind of software is this, and what movement did it help establish?",
        options: ["Software with visible source code owned by one company; established by Microsoft", "Software whose source code is publicly available to view, modify, and distribute; Linux helped establish the movement", "Free (no cost) software with no licensing terms", "Software developed by government agencies"],
        answer: "Software whose source code is publicly available to view, modify, and distribute; Linux helped establish the movement",
        explanation: "Open source means anyone can study, modify, and distribute the code. Linux (1991) proved open collaboration could produce world-class software.",
        detail: "Richard Stallman founded the GNU Project in 1983 and wrote the GPL license that guarantees software freedom. Linus Torvalds released the Linux kernel in 1991. Today, open source powers the internet: Linux, Kubernetes, React, PostgreSQL, and millions of other projects. The open source model also influenced business models (open core, SaaS) and developer culture."
      }
    ]
  },

  {
    track: "History of Programming & Development",
    level: 2,
    lesson: {
      title: "The Modern Era: OOP to Cloud",
      body: [
        "Object-Oriented Programming emerged from Simula (1967) and Smalltalk (1972), organising code into objects that bundle data and behaviour together. C++ (1983) and Java (1995) brought OOP to mainstream software engineering. Java's key innovation was 'Write Once, Run Anywhere': code compiles to bytecode that runs on the Java Virtual Machine (JVM), which is available for every platform. This made Java dominant for enterprise software and later Android. The JVM also spawned Kotlin, Scala, Clojure, and Groovy — languages that run on the same runtime and inherit its ecosystem.",
        "The late-1990s Browser Wars between Netscape and Internet Explorer fragmented the web with incompatible features but ultimately drove standardisation. JavaScript was created by Netscape in 10 days in 1995. When Microsoft crushed Netscape's market share by bundling IE with Windows, Netscape open-sourced its code — which became Firefox (2004) and later drove Chrome (2008). In 2001, seventeen developers signed the Agile Manifesto in response to the chronic failure of Waterfall's rigid, documentation-heavy approach to deliver software on time. Agile's four values prioritised working software, people, and responding to change — giving birth to Scrum, Kanban, and XP.",
        "Moore's Law — Gordon Moore's 1965 observation that transistor counts double roughly every two years — drove 50 years of hardware performance gains that developers relied on without realising it. As it slows near atomic scale, performance now requires parallel computing, specialised chips (GPUs, TPUs, Apple Silicon), and algorithmic efficiency. Amazon Web Services launched EC2 in 2006 — rent virtual servers by the hour via API — creating modern cloud computing and enabling startups to build globally without hardware investment. Google's V8 engine (2008) JIT-compiled JavaScript to native machine code, making Node.js (2009) possible. Docker (2013) solved the 'works on my machine' problem by packaging apps with all runtime dependencies into portable containers."
      ],
      example: {
        label: "Run a containerised app — the Docker way:",
        code: "docker build -t my-app .\ndocker run -p 3000:3000 my-app"
      }
    },
    questions: [
      {
        id: "hp-2-1",
        question: "Before OOP, large programs were organized as lists of instructions acting on shared data. OOP grouped related data and behavior together. What shift did this introduce — and what three concepts does it enable?",
        options: ["OOP removed the need for variables", "OOP organised code into objects combining data and behaviour, enabling encapsulation, inheritance, and polymorphism", "OOP made programs run faster by default", "OOP was purely a UI programming style"],
        answer: "OOP organised code into objects combining data and behaviour, enabling encapsulation, inheritance, and polymorphism",
        explanation: "OOP modelled programs as interacting objects, making large codebases more manageable by hiding complexity behind interfaces.",
        detail: "Simula (1967) is considered the first OOP language. Smalltalk (1972) refined the paradigm at Xerox PARC. C++ (1983) and Java (1995) brought OOP to mainstream use. The key concepts: encapsulation (hide internals), inheritance (reuse via subclassing), and polymorphism (one interface, many implementations). OOP is still dominant but functional programming is resurgent."
      },
      {
        id: "hp-2-2",
        question: "In the late 1990s, Microsoft bundled a browser with Windows to crush a rival. The defeated company open-sourced its code — which eventually became Firefox and drove the creation of Chrome. What was this conflict called, and what did it produce?",
        options: ["A competition between search engines", "The late-1990s rivalry between Netscape and Internet Explorer that drove web standards and eventually led to Firefox and modern browsers", "A standards body dispute over HTTP", "The competition between Chrome and Safari"],
        answer: "The late-1990s rivalry between Netscape and Internet Explorer that drove web standards and eventually led to Firefox and modern browsers",
        explanation: "Netscape vs. IE accelerated web development but fragmented it with incompatible features. Netscape's defeat led to Mozilla and eventually Firefox.",
        detail: "Microsoft bundled IE with Windows, crushing Netscape's market share by ~2000. Netscape open-sourced its code, which became Mozilla, then Firefox (2004). Firefox's success drove Chrome (2008). The wars also spurred the W3C to formalise HTML/CSS standards. JavaScript itself was created by Netscape in 10 days in 1995 during this period."
      },
      {
        id: "hp-2-3",
        question: "In 2001, seventeen developers gathered and wrote a manifesto. They were reacting to a development approach that locked in requirements for years, produced massive documentation, and routinely delivered projects late — or never. What were they pushing back against?",
        options: ["The Y2K bug", "The failure rates of heavyweight, plan-driven software development (Waterfall) to deliver working software on time", "The proliferation of programming languages", "The lack of open-source licensing frameworks"],
        answer: "The failure rates of heavyweight, plan-driven software development (Waterfall) to deliver working software on time",
        explanation: "Agile reacted to Waterfall's rigid phase-gate model that delivered software years late (or never) — it prioritised working software, collaboration, and responding to change.",
        detail: "Seventeen developers signed the Agile Manifesto in Snowbird, Utah. Its four values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan. Agile birthed Scrum, Kanban, XP, and shaped how most software is built today."
      },
      {
        id: "hp-2-4",
        question: "Sun Microsystems released a language in 1995 that compiled your code once, and the resulting binary ran on Windows, Mac, Linux, and everything else — without recompiling. How did it do this?",
        options: ["Java apps had no bugs", "Java compiled to bytecode run on a virtual machine, making it platform-independent for the first time at scale", "Java was the first interpreted language", "Java eliminated the need for operating systems"],
        answer: "Java compiled to bytecode run on a virtual machine, making it platform-independent for the first time at scale",
        explanation: "The JVM abstracted away the operating system, so a Java program compiled once could run on Windows, Mac, Linux, or any platform with a JVM.",
        detail: "Sun Microsystems released Java in 1995. The JVM model was revolutionary: compile once to .class bytecode, deploy anywhere. This made Java dominant for enterprise and Android development. The JVM also spawned other languages: Kotlin, Scala, Groovy, and Clojure all run on it. The idea of a language-independent bytecode VM influenced the LLVM and WebAssembly."
      },
      {
        id: "hp-2-5",
        question: "For 50 years, developers didn't worry much about inefficient code — faster hardware would compensate. That assumption is no longer safe. What was the observation that drove those gains, and why is it slowing?",
        options: ["CPU clock speeds double every 18 months indefinitely", "Transistor count roughly doubles every two years due to physical miniaturisation limits that are now being reached", "RAM capacity doubles every year due to manufacturing economies", "Network bandwidth doubles every 18 months"],
        answer: "Transistor count roughly doubles every two years due to physical miniaturisation limits that are now being reached",
        explanation: "Gordon Moore's 1965 observation held for ~50 years, but transistors are now near atomic scale, making further miniaturisation exponentially harder.",
        detail: "Moore's Law drove 50 years of performance gains developers took for granted — faster hardware compensated for inefficient code. As it slows, performance gains now require: parallel computing (multi-core), specialised chips (GPUs, TPUs, Apple Silicon), algorithmic efficiency, and better software. Understanding this history explains why concurrency and energy efficiency are increasingly important."
      },
      {
        id: "hp-2-6",
        question: "In 2006, a company launched a service that let you rent virtual servers by the hour through an API call — no hardware purchase, no data centre, just a credit card. What was this, and who launched it?",
        options: ["The invention of WiFi", "Amazon Web Services launching EC2 in 2006, making scalable server infrastructure available on-demand via API", "The release of VMware virtualisation", "Google's acquisition of YouTube"],
        answer: "Amazon Web Services launching EC2 in 2006, making scalable server infrastructure available on-demand via API",
        explanation: "AWS EC2 let developers rent virtual servers by the hour via an API, eliminating the need to buy physical hardware — the origin of modern cloud computing.",
        detail: "Amazon built EC2 partly from its own internal infrastructure for Amazon.com. The concept of 'renting compute by the hour' was novel. AWS grew to dominate, then Google Cloud and Azure followed. Cloud computing enabled startups to launch globally without capital investment in hardware, democratising the ability to build and scale software — fundamentally changing the industry."
      },
      {
        id: "hp-2-7",
        question: "Before 2008, JavaScript was considered too slow to run on servers. Google released an engine that compiled it directly to machine code. What did this unlock, and what came next?",
        options: ["It was the first JavaScript engine", "V8 compiled JavaScript to native machine code, making it fast enough for Node.js to run JS on servers", "V8 introduced async/await to JavaScript", "V8 was the first open-source browser engine"],
        answer: "V8 compiled JavaScript to native machine code, making it fast enough for Node.js to run JS on servers",
        explanation: "Google's V8 brought JIT compilation to JavaScript, dramatically improving speed and enabling Ryan Dahl to build Node.js (2009) — JavaScript on the server.",
        detail: "Before V8, JS was an interpreted scripting language, too slow for serious use. V8's JIT (Just-In-Time) compilation transformed JS performance. Node.js used V8 to create a single-language full-stack: JS everywhere. This triggered an explosion in JS tooling, npm became the world's largest package registry, and the modern JS ecosystem was born."
      },
      {
        id: "hp-2-8",
        question: "A developer's app works perfectly on their laptop but crashes on the staging server due to a different library version. Docker was built to solve exactly this class of problem. What is it called?",
        options: ["Slow JavaScript performance", "The 'works on my machine' problem — inconsistent environments between development, staging, and production", "Database scaling for web apps", "Slow network I/O in cloud servers"],
        answer: "The 'works on my machine' problem — inconsistent environments between development, staging, and production",
        explanation: "Docker packaged apps with all dependencies into portable containers that run identically regardless of the host environment.",
        detail: "Before containers, deploying meant hoping the production server had the same library versions as development. Docker used Linux kernel features (cgroups, namespaces) to isolate processes. Unlike VMs, containers share the OS kernel — fast to start, small overhead. Docker's real innovation was the image format and registry (Docker Hub). Kubernetes (2014) emerged to orchestrate containers at scale."
      }
    ]
  },

  {
    track: "History of Programming & Development",
    level: 3,
    lesson: {
      title: "Theory & Foundations: The Ideas Beneath the Code",
      body: [
        "In 1936, Alonzo Church and Alan Turing independently developed two models of computation — lambda calculus and the Turing Machine — and proved they were equivalent. The Church-Turing thesis conjectures that both capture the true meaning of 'computation': any function computable by any reasonable model can be computed by a Turing Machine. This equivalence means all general-purpose programming languages are equally powerful in a fundamental theoretical sense (Turing-complete). Lambda calculus became the theoretical foundation of functional programming — Haskell, Lisp, ML, and modern functional features in JavaScript and Python all trace back to Church's work.",
        "Turing also proved the Halting Problem: no general algorithm can determine, for an arbitrary program and input, whether the program will halt or loop forever. The proof is self-referential — assume a halting oracle H exists, construct a program D that does the opposite of H's prediction for itself, then ask H about D. Contradiction. This means there are questions computers fundamentally cannot answer, regardless of speed or cleverness. Undecidability has practical implications: you cannot write a program that automatically verifies all properties of all programs. Static analysers and type systems are powerful but necessarily incomplete.",
        "Edsger Dijkstra's 1968 letter 'Go To Statement Considered Harmful', published in Communications of the ACM, argued that arbitrary goto jumps make programs impossible to reason about — control flow becomes untrackable. This helped establish structured programming (sequences, loops, conditionals) as the standard paradigm, replacing 'spaghetti code'. Bell Labs (AT&T's research arm) produced an extraordinary concentration of foundational breakthroughs: the transistor (1947), Claude Shannon's information theory (1948), Unix (1969), and C (1972). Its model — long-horizon research with no immediate commercial pressure — produced the infrastructure that modern computing is built on."
      ],
      example: {
        label: "Lambda calculus — the notation behind functional programming:",
        code: "// Lambda calculus identity function: λx.x\n// In JavaScript:\nconst identity = x => x;\n\n// Church numeral for 2: λf.λx.f(f(x))\nconst two = f => x => f(f(x));"
      }
    },
    questions: [
      {
        id: "hp-3-1",
        question: "In 1936, two researchers working independently — one using abstract tape machines, one using mathematical functions — arrived at equivalent definitions of computation. Their work implies all general-purpose languages are equally powerful. What is this principle called?",
        options: ["A legal framework for software patents", "The conjecture that any function computable by any reasonable model of computation can be computed by a Turing Machine — defining the limits of computation", "A theorem about parallel processing efficiency", "A proof that all programs terminate"],
        answer: "The conjecture that any function computable by any reasonable model of computation can be computed by a Turing Machine — defining the limits of computation",
        explanation: "Church and Turing independently showed their models were equivalent, suggesting they captured the true meaning of 'computation' — all programming languages are equally powerful in this sense.",
        detail: "Alonzo Church's lambda calculus and Turing's machine model, developed independently in 1936, turned out to be equivalent. This equivalence is the basis for all of programming language theory: every general-purpose language is Turing-complete. Lambda calculus became the theoretical foundation of functional programming (Haskell, Lisp, ML)."
      },
      {
        id: "hp-3-2",
        question: "A programmer asks: can I write a general tool that looks at any program and tells me whether it will ever finish or loop forever? Turing proved in 1936 that no such tool can exist. What is this fundamental limit called, and why is it unsolvable?",
        options: ["A problem with early hardware stopping unexpectedly", "Turing proved no general algorithm can determine whether an arbitrary program will halt or run forever — a fundamental limit of computation", "A race condition in multi-threaded programs", "An unsolved optimisation problem in compiler design"],
        answer: "Turing proved no general algorithm can determine whether an arbitrary program will halt or run forever — a fundamental limit of computation",
        explanation: "Turing proved by diagonalisation that you cannot write a program that correctly decides for all programs whether they halt — some questions are formally undecidable.",
        detail: "The proof uses a clever self-referential argument: assume a halting oracle H exists; construct a program D that does the opposite of H's prediction; ask H about D — contradiction. This result means there are fundamental things computers cannot do, no matter how fast or clever. Undecidability has practical implications: you cannot automatically verify all program properties."
      },
      {
        id: "hp-3-3",
        question: "In 1968, a computer scientist published a letter arguing that a popular control flow technique was making programs impossible to read or reason about. His critique helped end 'spaghetti code'. What was he criticising, and what did it help establish?",
        options: ["It introduced the goto statement to programming", "It argued that goto made programs unreadable and unmaintainable, helping establish structured programming as the standard paradigm", "It proposed garbage collection for memory management", "It critiqued Fortran's performance"],
        answer: "It argued that goto made programs unreadable and unmaintainable, helping establish structured programming as the standard paradigm",
        explanation: "Dijkstra argued programs using goto are hard to reason about because control flow becomes arbitrary — advocating for loops and conditionals instead.",
        detail: "This letter in Communications of the ACM is one of the most influential papers in software engineering history. Structured programming (using sequences, loops, and conditionals) replaced spaghetti code built with gotos. Dijkstra also invented Dijkstra's shortest path algorithm and made foundational contributions to formal verification and concurrent programming."
      },
      {
        id: "hp-3-4",
        question: "One research institution produced the transistor, information theory, Unix, and the C language — across two decades of work with no immediate commercial pressure. Which institution was this, and what made its model so productive?",
        options: ["It invented the internet", "It produced Unix, the C language, the transistor, and foundational work in information theory — arguably the most prolific research institution in computing history", "It created the first commercial PC", "It standardised TCP/IP networking"],
        answer: "It produced Unix, the C language, the transistor, and foundational work in information theory — arguably the most prolific research institution in computing history",
        explanation: "Bell Labs (AT&T's research arm) produced the transistor (1947), information theory (Shannon, 1948), Unix (1969), C (1972), and many other foundational contributions.",
        detail: "Information theory by Claude Shannon gave us the mathematical foundation for all digital communication. The transistor replaced vacuum tubes and enabled miniaturisation. Unix and C shaped operating systems and programming for decades. Bell Labs' model — long-horizon research with no immediate commercial pressure — produced breakthroughs that still underpin modern technology. Jon Gertner's book 'The Idea Factory' covers this history."
      }
    ]
  }

];

// Flat array derived from LEVELS so game.js can filter by q.track and q.level
// without modification. Each question gets its parent track and level injected.
const QUESTIONS = LEVELS.flatMap(entry =>
  entry.questions.map(q => ({ ...q, track: entry.track, level: entry.level }))
);
