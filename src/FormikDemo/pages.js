export const pages = [
  {
    id: 0,
    title: "Milyen szolgatatast keres?",
    subtitle:
      "Kerjuk jelolje be, hogy milyen szolgatatasokat szeretne igenybe venni a keresett partnertol!",
    fields: [
      {
        type: "checkbox",
        name: "typeOfResearch",
        elements: [
          "konyveles",
          "adotanacsadas",
          "Cegalapitas",
          "Berszamfejtes",
          "Jonyvizsgalat",
        ],
        required: true,
      },
    ],
    cta: "Kovetkezo",
  },
  {
    id: 1,
    title: "Second Page",
    subtitle: "Blue Blue",
    fields: [
      {
        type: "input",
        elements: [
          {
            type: "text",
            label: "first Name",
            placeholder: "Ex: Elon Musk",
            name: "firstName",
          },
        ],
      },
    ],
    cta: "Kovetkezo",
  },
];
