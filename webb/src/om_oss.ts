import "./style.css";

const about_us = document.getElementById("app");

if (about_us) {
  const html = `
    <div class="container">
    <div class="videoBox">
    <video autoplay muted loop playsinline class="video-back">
    <source src="media/office.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>
    <div class="video-text">
    <h2>Din framtid börjar här</h2>
    <p>Vi skapar moderna och responsiva webbplatser för alla branscher.</p>
    </div>
    </div> 
        <section class="intro">
            <div class="text-box">
            <img src="media/art.jpg" alt="art" id="img">
            </div>
            <div class="text-box2">
            <div class="style-box">
            <h1 id="header">Om oss</h1>
            <p id="text">
            <b>Välkommen till Horizon Web Solutions</b> – din pålitliga partner inom webbdesign och digitala lösningar. Vi är en kreativ webbyrå som hjälper företag att skapa och utveckla sina online-närvaro genom skräddarsydda och användarvänliga webbplatser.
            Horizon Web Solutions kombinerar vi kreativitet och expertis för att skapa diVårt mål är att leverera innovativa och funktionella webblösningar som inte bara möter utan överträffar våra kunders förväntningar. Med en passion för design, teknik och användarupplevelse jobbar vi tätt tillsammans med varje kund för att förstå deras vision och skapa lösningar som ger verklig affärsnytta.
            Vi erbjuder allt från responsiv webbdesign, e-handelslösningar, och sökmotoroptimering (SEO), till teknisk support och digital marknadsföring. Oavsett om du är ett litet företag som just har börjat eller ett etablerat varumärke, är vi här för att hjälpa dig att växa och lyckas online.
            På gitala upplevelser som gör intryck.
            </p>
            </div>
            </div>
        </section>


        <section class="main_info">
        </section>
    </div> 
    `;
  about_us.innerHTML = html;
}
