<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PC Builder Home Page</title>
    <link rel="stylesheet" href="comunity.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>

<body>

    <!-- Start of Navigation Section -->

    <div id="nav">

        <div class="nav-section left" id="logo">

        </div>

        <div class="nav-section center" id="links">
            <a href="index.html">Home</a>
            <a href="buildPC.html">Build PC</a>
            <a href="buildsuggest.html">Pre-Build Suggesions</a>
            <a href="guides.php">Guides</a>
            <a href="comunity.html">Community</a>
            <a href="support.html">Support</a>
        </div>

        <div class="nav-section right">

            <div id="search-container">
                <i class="fa fa-search"></i>
                <input type="search" placeholder="Search here ...">
            </div>

            <div id="user">
                <a href="./signup.html">
                <i class="fa-solid fa-user-plus"></i>
                </a>
            </div>

            <div id="cart">
                <a href="./cart.html">
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
            </div>

        </div>
    </div>

    <!-- End of Navigation Section -->

    <!-- --------------------------community build text----------------- -->
    <div class="title">
        <h1>Community Build</h1>
        <br>
        <h3>Flex Your Creativity and share your idea with others</h3>
    </div>
    <!-- -------------------------------------- -->

    <form class="form-container" action="upload_build.php" method="POST" enctype="multipart/form-data">


        <h2>Upload Your Build</h2>

        <div class="line1">
            <label>Build Name</label>
            <br><br>
            <input type="text" name="build_name" required>
        </div>

        <div class="line2">
            <div>
                <label>Build Type</label>
                <br><br>
                <select name="build_type" required>
                    <option value="Gaming PC">Gaming PC</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Office">Office</option>
                </select>
            </div>

            <div>
                <label>Approximate Budget</label>
                <br><br>
                <input type="text" name="budget" required>
            </div>
        </div>

        <div class="line3">
            <div>
                <label>CPU</label>
                <br><br>
                <input type="text" name="cpu">
            </div>
            <div>
                <label>GPU</label>
                <br><br>
                <input type="text" name="gpu">
            </div>
            <div>
                <label>RAM</label>
                <br><br>
                <input type="text" name="ram">
            </div>
            <div>
                <label>Motherboard</label>
                <br><br>
                <input type="text" name="motherboard">
            </div>
            <div>
                <label>PSU</label>
                <br><br>
                <input type="text" name="psu">
            </div>
        </div>

        <div class="line4">
            <div class="upload-box">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <p>Drag & Drop Image<br>or<br>Select File</p>
                <input type="file" name="image">
            </div>

            <textarea name="description" placeholder="Description"></textarea>
        </div>

        <button class="upload-btn" type="submit">Upload Build</button>
    
    </form>




    <div class="explorebuild">
        <h1 style="color: white;">Explore Community Build</h1>
    </div>

    <div class="explorebuild-cards" id="buildCards"></div>


    </div>


    <script>
        document.addEventListener("DOMContentLoaded", () => {

            const searchContainer = document.getElementById("search-container");
            const searchIcon = document.querySelector("#search-container .fa");
            const searchInput = document.querySelector("#search-container input");

            function toggleSearchBar(){
                const isActive = searchContainer.classList.toggle("active");
                if(isActive) searchInput.focus();
                else searchInput.value = "";
            }

            function closeSearchBar(event){
                if(!searchContainer.contains(event.target)){
                    searchContainer.classList.remove("active");
                    searchInput.value = "";
                }
            }

            function closeOnEsc(event){
                if(event.key === "Escape"){
                    searchContainer.classList.remove("active");
                    searchInput.value = "";
                }
            }

            searchIcon.addEventListener("click", toggleSearchBar);
            document.addEventListener("click", closeSearchBar);
            document.addEventListener("keydown", closeOnEsc);

            fetch("fetch_builds.php")
            .then(res => res.json())
            .then(data => {
                const container = document.getElementById("buildCards");

                if (data.length === 0) {
                    container.innerHTML = "<p style='color:white;text-align:center;'>No builds uploaded yet.</p>";
                    return;
                }

                data.forEach(build => {
                    const card = document.createElement("div");
                    card.classList.add("build-card");

                    card.innerHTML = `
                        <div class="build-img">
                            <img src="photos/${build.image}" alt="">
                        </div>

                        <h2>${build.build_name}</h2>

                        <div class="basic-info">
                            <p><strong>Type:</strong> ${build.build_type}</p>
                            <p><strong>Budget:</strong> ${build.budget}</p>
                        </div>

                        <div class="specs">
                            <p><strong>CPU:</strong> ${build.cpu}</p>
                            <p><strong>GPU:</strong> ${build.gpu}</p>
                            <p><strong>RAM:</strong> ${build.ram}</p>
                            <p><strong>Motherboard:</strong> ${build.motherboard}</p>
                            <p><strong>PSU:</strong> ${build.psu}</p>
                        </div>

                        <button class="view-btn">View Details</button>
                    `;


                    container.appendChild(card);
                })
            })


        });
    </script>



</body>

</html>