const alertBox = () => {
    var container = document.getElementById("alertboxcontainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "alertboxcontainer";
        container.style = "position: absolute; right: 10px; width: 300px; overflow: hidden;";
        document.body.append(container);
    }
    return {
        warning: (message) => {
            var boxElem = document.createElement('div');
            boxElem.style = "background: #ff9800; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; transform: translateX(105%); transition: 0.6s; transition-property: transform, margin-top;";
            var titleElem = document.createElement('h4');
            var messageElem = document.createElement('p');
            titleElem.textContent = "Warning";
            messageElem.textContent = message;
            titleElem.style = "color: #eeeeff; margin-top: 0;margin-bottom: 2px;";
            messageElem.style = "color: #eeeeff; margin-bottom: 0; margin-top: 2px;";
            boxElem.append(titleElem)
            boxElem.append(messageElem);
            container.append(boxElem);
            setTimeout(() => {
                boxElem.style = "background: #ff9800; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; transform: translateX(0); transition: 0.6s; transition-property: transform, margin-top;";
                setTimeout(() => {
                    boxElem.style = "background: #ff9800; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; margin-top: -100%; transition: 0.6s; transition-property: transform, margin-top;";
                    setTimeout(() => {
                        boxElem.remove();
                    }, 500);
                }, 1500);
            }, 250);
        },
        error: (message) => {
            var boxElem = document.createElement('div');
            boxElem.style = "background: #f44336; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; transform: translateX(105%); transition: 0.6s; transition-property: transform, margin-top;";
            var titleElem = document.createElement('h4');
            var messageElem = document.createElement('p');
            titleElem.textContent = "Error";
            messageElem.textContent = message;
            titleElem.style = "color: #eeeeff; margin-top: 0;margin-bottom: 2px;";
            messageElem.style = "color: #eeeeff; margin-bottom: 0; margin-top: 2px;";
            boxElem.append(titleElem)
            boxElem.append(messageElem);
            container.append(boxElem);
            setTimeout(() => {
                boxElem.style = "background: #f44336; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; transform: translateX(0); transition: 0.6s; transition-property: transform, margin-top;";
                setTimeout(() => {
                    boxElem.style = "background: #f44336; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; margin-top: -100%; transition: 0.6s; transition-property: transform, margin-top;";
                    setTimeout(() => {
                        boxElem.remove();
                    }, 500);
                }, 1500);
            }, 250);
        },
        success: (message) => {
            var boxElem = document.createElement('div');
            boxElem.style = "background: #04AA6D; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; transform: translateX(105%); transition: 0.6s; transition-property: transform, margin-top;";
            var titleElem = document.createElement('h4');
            var messageElem = document.createElement('p');
            titleElem.textContent = "Success";
            messageElem.textContent = message;
            titleElem.style = "color: #eeeeff; margin-top: 0;margin-bottom: 2px;";
            messageElem.style = "color: #eeeeff; margin-bottom: 0; margin-top: 2px;";
            boxElem.append(titleElem)
            boxElem.append(messageElem);
            container.append(boxElem);
            setTimeout(() => {
                boxElem.style = "background: #04AA6D; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; transform: translateX(0); transition: 0.6s; transition-property: transform, margin-top;";
                setTimeout(() => {
                    boxElem.style = "background: #04AA6D; padding: 5px; border-radius: 4px; font-family:sans-serif; position: relative; with: 100%; margin: 2px; margin-top: -100%; transition: 0.6s; transition-property: transform, margin-top;";
                    setTimeout(() => {
                        boxElem.remove();
                    }, 500);
                }, 1500);
            }, 250);
        }
    };
};