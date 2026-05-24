function LanguageSwitcher({ language, setLanguage }) {

  return (

    <div className="language-switcher">

      <select
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value)
        }
      >

        <option value="en">
          English
        </option>

        <option value="ta">
          தமிழ்
        </option>

        <option value="hi">
          हिन्दी
        </option>

        <option value="kn">
          ಕನ್ನಡ
        </option>

      </select>

    </div>

  );

}

export default LanguageSwitcher;