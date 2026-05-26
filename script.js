console.log("script connected");

// MOBILE MENU

const menuButton = document.querySelector(".menu-button");

const closeMenuButton =
    document.querySelector(".close-menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.add("active");

    });

}

if (closeMenuButton && mobileMenu) {

    closeMenuButton.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

}

const mobileMenuLinks =
    document.querySelectorAll(".mobile-menu a");

mobileMenuLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {

            mobileMenu.classList.remove("active");

        }

    });

});

document.addEventListener("click", (event) => {

    if (
        mobileMenu &&
        menuButton &&
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        mobileMenu.classList.remove("active");

    }

});

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        mobileMenu
    ) {

        mobileMenu.classList.remove("active");

    }

});

// CHATBOT API

const sendButton =
    document.querySelector(".send-button");

const chatInput =
    document.querySelector(".chat-input");

const chatMessages =
    document.querySelector(".chat-messages");

if (sendButton) {

    sendButton.addEventListener("click", sendMessage);

}

async function sendMessage() {

    const userMessage =
        chatInput.value.trim();

    if (!userMessage) {

        return;

    }

    addUserMessage(userMessage);

    chatInput.value = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {

            throw new Error("API request failed");

        }

        await response.json();

        let botReply = "";

        const message =
            userMessage.toLowerCase();

        if (message.includes("order")) {

            botReply =
                "To order products, visit the Products page and add items to your basket.";

        }

        else if (
            message.includes("delivery")
        ) {

            botReply =
                "We deliver fresh produce directly from local farms every week.";

        }

        else if (
            message.includes("farm")
        ) {

            botReply =
                "Our partnering farms are shown on the map section of the website.";

        }

        else if (
            message.includes("container") ||
            message.includes("reuse")
        ) {

            botReply =
                "Customers can return containers during the next delivery for reuse.";

        }

        else {

            botReply =
                "Please contact support for more detailed assistance.";

        }

        addBotMessage(botReply);

    }

    catch (error) {

        addErrorMessage();

        console.error(error);

    }

}

function addUserMessage(message) {

    const messageElement =
        document.createElement("div");

    messageElement.classList.add(
        "user-message"
    );

    messageElement.textContent = message;

    chatMessages.appendChild(
        messageElement
    );

}

function addBotMessage(message) {

    const messageElement =
        document.createElement("div");

    messageElement.classList.add(
        "bot-message"
    );

    messageElement.textContent = message;

    chatMessages.appendChild(
        messageElement
    );

}

function addErrorMessage() {

    const errorElement =
        document.createElement("div");

    errorElement.classList.add(
        "error-message"
    );

    errorElement.textContent =
        "Failed to connect. Wait and try again later.";

    chatMessages.appendChild(
        errorElement
    );

}