//Header

const formHeader = document.createElement("h1");
formHeader.innerHTML = "Contact Us";
formHeader.className = "h1FormHeader";
document.getElementById("formHeader")?.append(formHeader);


function selectForm() {
type SubjectObject = {
    [subject: string]: {
      [topic: string]: string[];
    };
  };

  const subjectObject: SubjectObject = {
    "Privatperson": {
      "Kundservice": []
    },
    "Företag": {
      "Offertförfrågan": ["Hel webbsida", "Berätta mer"],
      "Kundservice": [],
    }
  };

//dropdown
const formSel = document.getElementById("subject") as HTMLSelectElement;
const topicSel = document.getElementById('topic') as HTMLSelectElement;

  // Lägga till alternativ för ämnen i "subject" dropdown
Object.keys(subjectObject).forEach(subject => {
const option = new Option(subject, subject);
formSel.appendChild(option);
});


 // När användaren ändrar ämne
 formSel.addEventListener('change', () => {
    // Töm "topic" dropdown
    const selectedSubject = formSel.value;
    topicSel.innerHTML = '<option value="">Select:</option>';

    if(subjectObject[selectedSubject]) {
        // Lägg till rätt ämnen i "topic" dropdown
      Object.keys(subjectObject[selectedSubject]).forEach((topic: string) => {
        const option = new Option(topic, topic);
        topicSel.appendChild(option);
    });
} 
    
});

// När användaren ändrar ämne (i "topic" dropdown)
topicSel.addEventListener('change', () => {
    
    contactForm()

});

}

selectForm()

//Form
function contactForm(){

    const contactForm = document.createElement("form") as HTMLFormElement
    contactForm.id = "contactForm";
    
    const nameLabel = document.createElement("label") as HTMLLabelElement
    nameLabel.innerHTML = "Namn:";
    nameLabel.className = "formLabel";
    
    const nameInput = document.createElement("input") as HTMLInputElement
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.placeholder = "Enter name";
    nameInput.className = "formInput";
    
    const emailLabel = document.createElement("label") as HTMLLabelElement
    emailLabel.innerHTML = "E-post:";
    emailLabel.className = "formLabel";
    
    const emailInput = document.createElement("input") as HTMLInputElement
    emailInput.type = "text";
    emailInput.name = "email";
    emailInput.placeholder = "Enter e-mail";
    emailInput.className = "formInput";

    const textAreaLabel = document.createElement("label") as HTMLLabelElement
    textAreaLabel.innerHTML = "Hur kan vi hjälpa dig?";
    textAreaLabel.className = "formLabel";

    const textArea = document.createElement("textarea") as HTMLTextAreaElement;
    textArea.rows = 10;
    textArea.cols = 40;
    textArea.className = "textArea";

    
    const formButton = document.createElement("button") as HTMLButtonElement
    formButton.type = "submit";
    formButton.innerHTML = "Skicka";
    formButton.className = "formButton";
    
    contactForm.append(nameLabel, nameInput, emailLabel, emailInput, textAreaLabel, textArea);
    document.getElementById("contactContainer")?.append(contactForm);
    document.getElementById("contactContainer")?.append(formButton);


}
