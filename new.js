 <script>
        // 1. Find Element by Id
        function findById() {
            const element = document.getElementById("title")
            element.textContent = "Element Found By ID";
        }

        // 2. Find first matching element
        function queryFirst() {
            const element = document.querySelector(".box")
            element.textContent = "First Box Selected";
        }

        // 3.Find all matching elements
        function queryAll() {
            const elements = document.querySelectorAll(".box");
            elements.forEach(function(element) {
                element.textContent = "All Boxes Selected";
            });
        }

        // 4. Change Text
        function changeText() {
            const element = document.getElementById("title");
            element.textContent = "New Text";
        }

        // 5. Change HTML
        function changeHTML() {
            const element = document.getElementById("title")
            element.innerHTML = "<b>Hello DOM!</b>";
        }

        // 6. Change CSS
        function changeCSS() {
            const element = document.getElementById("title")
            element.style.color = "red";
            element.style.backgroundColor = "yellow";
            element.style.padding = "10px";
        }

        // 7.Create an element
        function createElement() {
    
            const p = document.createElement("p");
            p.textContent = "This paragraph was created using DOM.";
            document.getElementById("output").appendChild(p);
        }

        // 8. Remove an element
        function removeElement() {
            const element = document.getElementById("title");
            element.remove();
        }
    </script>   