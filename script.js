const demoContent = {
  notes: {
    label: "Note Organization",
    title: "Turn fragmented records into a clearer patient narrative.",
    text: "Medizage restructures note fragments into a more coherent documentation flow so the care team can review key information faster."
  },
  summary: {
    label: "Medical Summary",
    title: "Reduce reading time on dense clinical information.",
    text: "The AI highlights main points, timeline relevance, and important medical details so users can move through documentation more efficiently."
  },
  template: {
    label: "Template Support",
    title: "Create repeatable nursing documentation structures.",
    text: "Medizage generates documentation templates that support consistency across recurring nursing notes, updates, and workflow records."
  },
  education: {
    label: "Clinical Education",
    title: "Explain terminology and support learning on the job.",
    text: "Educational assistance helps clinicians, trainees, and teams understand difficult terms and context without leaving the workflow."
  }
};

const tabButtons = document.querySelectorAll(".tab-button");
const demoLabel = document.getElementById("demo-label");
const demoTitle = document.getElementById("demo-title");
const demoText = document.getElementById("demo-text");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = demoContent[button.dataset.topic];
    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (demoLabel && demoTitle && demoText) {
      demoLabel.textContent = content.label;
      demoTitle.textContent = content.title;
      demoText.textContent = content.text;
    }
  });
});
