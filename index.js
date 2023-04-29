(function initAll() {
  const KEYCODE = {
    ShiftLeft: "ShiftLeft",
    ShiftRight: "ShiftRight",
    CapsLock: "CapsLock",
    Backspace: "Backspace",
    Delete: "Delete",
    Enter: "Enter",
    Tab: "Tab",
  };

  const LANGUAGE = {
    en: "en",
    ru: "ru",
  };

  const KEYBOARD = {
    elements: {
      textAria: null,
      keyBox: null,
      title: null,
      keys: [
        [
          "Backquote",
          "Digit1",
          "Digit2",
          "Digit3",
          "Digit4",
          "Digit5",
          "Digit6",
          "Digit7",
          "Digit8",
          "Digit9",
          "Digit0",
          "Minus",
          "Equal",
          "Backspace",
        ],
        [
          "Tab",
          "KeyQ",
          "KeyW",
          "KeyE",
          "KeyR",
          "KeyT",
          "KeyY",
          "KeyU",
          "KeyI",
          "KeyO",
          "KeyP",
          "BracketLeft",
          "BracketRight",
          "Backslash",
          "Delete",
        ],
        [
          "CapsLock",
          "KeyA",
          "KeyS",
          "KeyD",
          "KeyF",
          "KeyG",
          "KeyH",
          "KeyJ",
          "KeyK",
          "KeyL",
          "Semicolon",
          "Quote",
          "Enter",
        ],
        [
          "ShiftLeft",
          "KeyZ",
          "KeyX",
          "KeyC",
          "KeyV",
          "KeyB",
          "KeyN",
          "KeyM",
          "Comma",
          "Period",
          "Slash",
          "ArrowUp",
          "ShiftRight",
        ],
        [
          "ControlLeft",
          "MetaLeft",
          "AltLeft",
          "Space",
          "AltRight",
          "ArrowLeft",
          "ArrowDown",
          "ArrowRight",
          "ControlRight",
        ],
      ],
      functionKeys: [
        "Backspace",
        "Tab",
        "Delete",
        "CapsLock",
        "Enter",
        "ShiftLeft",
        "ShiftRight",
        "ControlLeft",
        "MetaLeft",
        "AltLeft",
        "AltRight",
        "ControlRight",
      ],
    },

    inputField: {
      capsLockToggle: false,
      languageToggle: "en",
    },

    language: {
      en: {
        lowerCase: {
          Backquote: "`",
          Digit1: "1",
          Digit2: "2",
          Digit3: "3",
          Digit4: "4",
          Digit5: "5",
          Digit6: "6",
          Digit7: "7",
          Digit8: "8",
          Digit9: "9",
          Digit0: "0",
          Minus: "-",
          Equal: "=",
          Backspace: "Backspace",
          Tab: "Tab",
          KeyQ: "q",
          KeyW: "w",
          KeyE: "e",
          KeyR: "r",
          KeyT: "t",
          KeyY: "y",
          KeyU: "u",
          KeyI: "i",
          KeyO: "o",
          KeyP: "p",
          BracketLeft: "[",
          BracketRight: "]",
          Backslash: "\\",
          Delete: "del",
          CapsLock: "CapsLock",
          KeyA: "a",
          KeyS: "s",
          KeyD: "d",
          KeyF: "f",
          KeyG: "g",
          KeyH: "h",
          KeyJ: "j",
          KeyK: "k",
          KeyL: "l",
          Semicolon: ";",
          Quote: "'",
          Enter: "Enter",
          ShiftLeft: "Shift",
          KeyZ: "z",
          KeyX: "x",
          KeyC: "c",
          KeyV: "v",
          KeyB: "b",
          KeyN: "n",
          KeyM: "m",
          Comma: ",",
          Period: ".",
          Slash: "/",
          ShiftRight: "Shift",
          ControlLeft: "Ctrl",
          MetaLeft: "win",
          AltLeft: "Alt",
          Space: " ",
          AltRight: "Alt",
          ControlRight: "Ctrl",
          ArrowUp: "&#8593;",
          ArrowRight: "&#8594;",
          ArrowDown: "&#8595;",
          ArrowLeft: "&#8592;",
        },
        shift: {
          Backquote: "~",
          Digit1: "!",
          Digit2: "@",
          Digit3: "#",
          Digit4: "$",
          Digit5: "%",
          Digit6: "^",
          Digit7: "&",
          Digit8: "*",
          Digit9: "(",
          Digit0: ")",
          Minus: "_",
          Equal: "+",
          Backspace: "Backspace",
          Tab: "Tab",
          KeyQ: "Q",
          KeyW: "W",
          KeyE: "E",
          KeyR: "R",
          KeyT: "T",
          KeyY: "Y",
          KeyU: "U",
          KeyI: "I",
          KeyO: "O",
          KeyP: "P",
          BracketLeft: "{",
          BracketRight: "}",
          Backslash: "|",
          Delete: "del",
          CapsLock: "CapsLock",
          KeyA: "A",
          KeyS: "S",
          KeyD: "D",
          KeyF: "F",
          KeyG: "G",
          KeyH: "H",
          KeyJ: "J",
          KeyK: "K",
          KeyL: "L",
          Semicolon: ":",
          Quote: '"',
          Enter: "Enter",
          ShiftLeft: "Shift",
          KeyZ: "Z",
          KeyX: "X",
          KeyC: "C",
          KeyV: "V",
          KeyB: "B",
          KeyN: "N",
          KeyM: "M",
          Comma: "<",
          Period: ">",
          Slash: "?",
          ShiftRight: "Shift",
          ControlLeft: "Ctrl",
          MetaLeft: "win",
          AltLeft: "Alt",
          Space: " ",
          AltRight: "Alt",
          ControlRight: "Ctrl",
          ArrowUp: "&#8593;",
          ArrowRight: "&#8594;",
          ArrowDown: "&#8595;",
          ArrowLeft: "&#8592;",
        },
      },

      ru: {
        lowerCase: {
          Backquote: "ё",
          Digit1: "1",
          Digit2: "2",
          Digit3: "3",
          Digit4: "4",
          Digit5: "5",
          Digit6: "6",
          Digit7: "7",
          Digit8: "8",
          Digit9: "9",
          Digit0: "0",
          Minus: "-",
          Equal: "=",
          Backspace: "Backspace",
          Tab: "Tab",
          KeyQ: "й",
          KeyW: "ц",
          KeyE: "у",
          KeyR: "к",
          KeyT: "е",
          KeyY: "н",
          KeyU: "г",
          KeyI: "ш",
          KeyO: "щ",
          KeyP: "з",
          BracketLeft: "х",
          BracketRight: "ъ",
          Backslash: "\\",
          Delete: "del",
          CapsLock: "CapsLock",
          KeyA: "ф",
          KeyS: "ы",
          KeyD: "в",
          KeyF: "а",
          KeyG: "п",
          KeyH: "р",
          KeyJ: "о",
          KeyK: "л",
          KeyL: "д",
          Semicolon: "ж",
          Quote: "э",
          Enter: "Enter",
          ShiftLeft: "Shift",
          KeyZ: "я",
          KeyX: "ч",
          KeyC: "с",
          KeyV: "м",
          KeyB: "и",
          KeyN: "т",
          KeyM: "ь",
          Comma: "б",
          Period: "ю",
          Slash: ".",
          ShiftRight: "Shift",
          ControlLeft: "Ctrl",
          MetaLeft: "win",
          AltLeft: "Alt",
          Space: " ",
          AltRight: "Alt",
          ControlRight: "Ctrl",
          ArrowUp: "&#8593;",
          ArrowRight: "&#8594;",
          ArrowDown: "&#8595;",
          ArrowLeft: "&#8592;",
        },
        shift: {
          Backquote: "Ё",
          Digit1: "!",
          Digit2: '"',
          Digit3: "№",
          Digit4: ";",
          Digit5: "%",
          Digit6: ":",
          Digit7: "?",
          Digit8: "*",
          Digit9: "(",
          Digit0: ")",
          Minus: "_",
          Equal: "+",
          Backspace: "Backspace",
          Tab: "Tab",
          KeyQ: "Й",
          KeyW: "Ц",
          KeyE: "У",
          KeyR: "К",
          KeyT: "Е",
          KeyY: "Н",
          KeyU: "Г",
          KeyI: "Ш",
          KeyO: "Щ",
          KeyP: "З",
          BracketLeft: "Х",
          BracketRight: "Ъ",
          Backslash: "/",
          Delete: "del",
          CapsLock: "CapsLock",
          KeyA: "Ф",
          KeyS: "Ы",
          KeyD: "В",
          KeyF: "А",
          KeyG: "П",
          KeyH: "Р",
          KeyJ: "О",
          KeyK: "Л",
          KeyL: "Д",
          Semicolon: "Ж",
          Quote: "Э",
          Enter: "Enter",
          ShiftLeft: "Shift",
          KeyZ: "Я",
          KeyX: "Ч",
          KeyC: "С",
          KeyV: "М",
          KeyB: "И",
          KeyN: "Т",
          KeyM: "Ь",
          Comma: "Б",
          Period: "Ю",
          Slash: ",",
          ShiftRight: "Shift",
          ControlLeft: "Ctrl",
          MetaLeft: "win",
          AltLeft: "Alt",
          Space: " ",
          AltRight: "Alt",
          ControlRight: "Ctrl",
          ArrowUp: "&#8593;",
          ArrowRight: "&#8594;",
          ArrowDown: "&#8595;",
          ArrowLeft: "&#8592;",
        },
      },
    },

    createElement({ tag, tagClass, tagText }) {
      const elements = document.createElement(tag);
      elements.className = tagClass;
      elements.innerHTML = tagText;
      return elements;
    },

    createKeyArea(arrKey, arrFuncKeys) {
      const keyBox = this.createElement({ tag: 'div', tagClass: 'keyboard', tagText: '' });

      for (let i = 0; i < arrKey.length; i += 1) {
        const keysRow = this.createElement({ tag: 'div', tagClass: 'keys-row', tagText: '' });

        for (let j = 0; j < arrKey[i].length; j += 1) {
          const key = arrKey[i][j];
          let classesStr = `key ${key}`.toLowerCase();

          if (arrFuncKeys.includes(key)) classesStr = `${classesStr} key--function`;

          const keyElm = this.createElement({ tag: 'button', tagClass: classesStr, tagText: '' });
          keyElm.setAttribute('data-key-code', key);
          keysRow.append(keyElm);
        }
        keyBox.append(keysRow);
      }
      return keyBox;
    },

    setShiftUpLayout() {
      this.setLayout({ query: '.key', language: this.inputField.languageToggle, shift: 'lowerCase' });
    },

    setShiftDownLayout() {
      this.setLayout({ query: '.key:not(.key--function)', language: this.inputField.languageToggle, shift: 'shift' });
    },

    setLayout({ query, language, shift }) {
      const arrKey = this.elements.keyBox.querySelectorAll(query);
      for (let i = 0; i < arrKey.length; i += 1) {
        const elem = arrKey[i];
        const keySymbol = this.language[language][shift][elem.dataset.keyCode];
        elem.innerHTML = keySymbol;
      }
    },

    setLangLayout(languageToggle) {
      this.setLayout({ query: '.key', language: languageToggle, shift: 'lowerCase' });
      this.inputField.languageToggle = languageToggle;
      localStorage.setItem('virtualKeyboardLang', languageToggle);
    },

    setCapsLock() {
      const arrKey = this.elements.keyBox.querySelectorAll('.key:not(.key--function)');

      for (let i = 0; i < arrKey.length; i += 1) {
        const element = arrKey[i];
        const keySymbol = element.innerHTML.toUpperCase();
        element.innerHTML = keySymbol;
      }
    },

    switchLangLayout() {
      if (this.inputField.languageToggle === LANGUAGE.en) {
        this.inputField.languageToggle = LANGUAGE.ru;
      } else if (this.inputField.languageToggle === LANGUAGE.ru) {
        this.inputField.languageToggle = LANGUAGE.en;
      }
      this.setLangLayout(this.inputField.languageToggle);
    },

    typeChar(char) {
      const text = this.elements.textAria.value;
      const start = this.elements.textAria.selectionStart;
      const end = this.elements.textAria.selectionEnd;

      this.elements.textAria.value = `${text.substring(0, start)}${char}${text.substring(end)}`;
      this.elements.textAria.selectionStart = start + 1;
      this.elements.textAria.selectionEnd = start + 1;
    },

    typeBackspace() {
      const text = this.elements.textAria.value;
      const start = this.elements.textAria.selectionStart;
      const end = this.elements.textAria.selectionEnd;

      if (start === end) {
        this.elements.textAria.value = text.substring(0, start - 1) + text.substring(end);
        this.elements.textAria.selectionStart = start - 1;
        this.elements.textAria.selectionEnd = start - 1;
      } else {
        this.elements.textAria.value = text.substring(0, start) + text.substring(end);
        this.elements.textAria.selectionStart = start;
        this.elements.textAria.selectionEnd = start;
      }
      this.elements.textAria.focus();
    },

    typeDelete() {
      const text = this.elements.textAria.value;
      const start = this.elements.textAria.selectionStart;
      const end = this.elements.textAria.selectionEnd;

      if (start === end) {
        this.elements.textAria.value = text.substring(0, start) + text.substring(end + 1);
        this.elements.textAria.selectionStart = start;
        this.elements.textAria.selectionEnd = start;
      } else {
        this.elements.textAria.value = text.substring(0, start) + text.substring(end);
        this.elements.textAria.selectionStart = start;
        this.elements.textAria.selectionEnd = start;
      }
      this.elements.textAria.focus();
    },
    toggleCapsLock() {
      const element = this.elements.keyBox.querySelector('button[data-key-code="CapsLock"]');
      if (!this.inputField.capsLockToggle) {
        element.classList.add('turn-on');
        this.setCapsLock();
        this.inputField.capsLockToggle = true;
      } else {
        element.classList.remove('turn-on');
        this.setShiftUpLayout();
        this.inputField.capsLockToggle = false;
      }
    },

    handleFunctionKeys(keyCode) {
      switch (keyCode) {
        case KEYCODE.Backspace:
          this.typeBackspace();
          break;
        case KEYCODE.Delete:
          this.typeDelete();
          break;
        case KEYCODE.Enter:
          this.typeChar('\n');
          break;
        case KEYCODE.Tab:
          this.typeChar('\t');
          break;
        case KEYCODE.ShiftLeft:
          this.setShiftDownLayout();
          break;
        case KEYCODE.ShiftRight:
          this.setShiftDownLayout();
          break;
        case KEYCODE.CapsLock:
          this.toggleCapsLock();
          break;
        default:
      }
    },

    handleEvent(event) {
      const element = this.elements.keyBox.querySelector(`button[data-key-code=${event.code}]`);
      if (!element) return;

      switch (event.type) {
        case 'keydown':
          element.classList.add('active');
          if (!(this.elements.functionKeys.includes(element.dataset.keyCode))) {
            const char = element.textContent;
            this.typeChar(char);
          }
          if (this.elements.functionKeys.includes(element.dataset.keyCode)) {
            this.handleFunctionKeys(element.dataset.keyCode);
          }
          if ((event.ctrlKey && event.altKey)) {
            this.switchLangLayout();
          }
          event.preventDefault();
          break;

        case 'keyup':
          element.classList.remove('active');
          if (element.dataset.keyCode === 'ShiftLeft' || element.dataset.keyCode === 'ShiftRight') {
            this.setShiftUpLayout();
          }
          break;
        default:
      }
    },

  });
})();
