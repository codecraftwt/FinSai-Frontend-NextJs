import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Settings, AlignLeft, AlignCenter, AlignRight, AlignJustify, Trash, ChevronDown, ChevronUp } from "lucide-react";
import { updatePageData, removeSection } from "../../store/slices/editorSlice";
import StyleEditorModal from './StyleEditorModal';
import AddSectionModal from './AddSectionModal';
import ImageUploader from './ImageUploader';

const Input = ({ label, value, onChange, type = "text", placeholder, max }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {type === "textarea" ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, max))}
        placeholder={placeholder}
        rows="3"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )}
  </div>
);

const ColorInput = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="flex gap-2">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-12 h-10 cursor-pointer rounded"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="#000000"
      />
    </div>
  </div>
);

const SliderInput = ({ label, value, onChange, min = 0, max = 100, step = 1, unit = "px" }) => {
  const [inputVal, setInputVal] = useState(value);
  const handleSlider = (e) => {
    const val = e.target.value;
    setInputVal(val);
    onChange(val + unit);
  };
  const handleInput = (e) => {
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setInputVal(val);
    if (val && !isNaN(val)) {
      const num = Math.min(max, Math.max(min, parseFloat(val)));
      onChange(num + unit);
    }
  };
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={parseFloat(value) || min}
          onChange={handleSlider}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <input
          type="text"
          value={inputVal}
          onChange={handleInput}
          onBlur={() => setInputVal(parseFloat(value) || min)}
          className="w-16 px-2 py-1 text-sm text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-xs text-gray-500">{unit}</span>
      </div>
    </div>
  );
};

const IconSelect = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex gap-2 justify-between bg-gray-50 p-1 rounded-md">
      {options.map((opt) => {
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex-1 p-3 rounded transition-all flex items-center justify-center gap-1 text-sm font-medium
              ${value === opt.value
                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-blue-500'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
            title={opt.label}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{opt.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

const Select = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const ListItem = ({ item, onUpdate, onRemove, fields }) => (
  <div className="p-3 border rounded-md bg-gray-50 mb-3">
    {fields.map((field) => (
      <Input
        key={field.key}
        label={field.label}
        value={item[field.key]}
        onChange={(v) => onUpdate(field.key, v)}
        type={field.type || "text"}
        placeholder={field.placeholder}
      />
    ))}
    <button
      onClick={onRemove}
      className="text-red-600 text-sm hover:underline"
    >
      Remove
    </button>
  </div>
);

export default function EditorRenderHomepage({ styleModal, setStyleModal }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.editor.pageData);

  const fontOptions = [
    { value: "Arial, sans-serif", label: "Arial" },
    { value: "Helvetica, sans-serif", label: "Helvetica" },
    { value: "Times New Roman, serif", label: "Times New Roman" },
    { value: "Georgia, serif", label: "Georgia" },
    { value: "Verdana, sans-serif", label: "Verdana" },
    { value: "Courier New, monospace", label: "Courier New" },
  ];

  const alignmentOptions = [
    { value: "left", label: "Left", icon: AlignLeft },
    { value: "center", label: "Center", icon: AlignCenter },
    { value: "right", label: "Right", icon: AlignRight },
    { value: "justify", label: "Justify", icon: AlignJustify },
  ];

  const sections = [
    { id: "hero", title: "Hero Section", defaultOpen: true, content: (
      <>
        <Input label="Main Heading" value={data.heroHeading || "Trade Secure With Finsai Trade."} onChange={(v) => update("heroHeading", v)} />
        <Input label="Subheading" value={data.heroSubheading || "Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem."} onChange={(v) => update("heroSubheading", v)} type="textarea" />
        <Input label="Open Live Account Button Text" value={data.openLiveAccountText || "Open Live Account"} onChange={(v) => update("openLiveAccountText", v)} />
        <Input label="Try Free Demo Button Text" value={data.tryFreeDemoText || "Try Free Demo"} onChange={(v) => update("tryFreeDemoText", v)} />
        <ImageUploader
          label="Hero Image"
          value={data.heroImage}
          onChange={(url) => update("heroImage", url)}
        />
      </>
    )},
    { id: "features", title: "Features Section", defaultOpen: true, content: (
      <>
        {(data.features || [
          { icon: "license", title: "Regulated & Licensed", description: "" },
          { icon: "atm", title: "Ultra-Fast Withdrawal", description: "" },
          { icon: "phone", title: "24/7 Support", description: "" },
          { icon: "safebox", title: "Secure Deposits", description: "" }
        ]).map((f, i) => (
          <ListItem
            key={i}
            item={f}
            onUpdate={(field, v) => updateNested("features", i, field, v)}
            onRemove={() => removeItem("features", i)}
            fields={[
              { key: "title", label: "Feature Title" },
              { key: "description", label: "Description", type: "textarea" },
            ]}
          />
        ))}
        <button onClick={() => addItem("features", { title: "", description: "" })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Feature
        </button>
      </>
    )},
    { id: "whyChoose", title: "Why Choose Section", defaultOpen: true, content: (
      <>
        <Input label="Section Title" value={data.whyChooseTitle || "Why Choose Finsai Trade"} onChange={(v) => update("whyChooseTitle", v)} />
        <Input label="Description" value={data.whyChooseDescription || "At Finsai Trade, we bridge traditional finance with cutting-edge trading technology. Whether you're a beginner or seasoned trader, our platform offers the perfect mix of reliability, innovation, and growth opportunity."} onChange={(v) => update("whyChooseDescription", v)} type="textarea" />
        <Input label="Learn More Button Text" value={data.learnMoreText || "Learn More"} onChange={(v) => update("learnMoreText", v)} />
        <ImageUploader
          label="Phone Screen Image"
          value={data.phoneScreenImage}
          onChange={(url) => update("phoneScreenImage", url)}
        />
        <ImageUploader
          label="Screen Blur Image"
          value={data.screenBlurImage}
          onChange={(url) => update("screenBlurImage", url)}
        />
      </>
    )},
    { id: "platforms", title: "Platforms Section", defaultOpen: true, content: (
      <>
        <Input label="Section Title" value={data.platformsTitle || "Powerful Platforms For Every Trader"} onChange={(v) => update("platformsTitle", v)} />
        <Input label="Description" value={data.platformsDescription || "Trade Seamlessly On The Go Or From Your Desktop With Our Cutting-Edge Platforms."} onChange={(v) => update("platformsDescription", v)} type="textarea" />
        <Input label="Learn More Button Text" value={data.platformsLearnMoreText || "Learn More"} onChange={(v) => update("platformsLearnMoreText", v)} />
        {(data.platforms || [
          { icon: "metatrader", title: "MetaTrader 5", description: "Pro-grade tools for advanced traders" },
          { icon: "webtrader", title: "Finsai WebTrader", description: "Browser-based, no downloads needed" },
          { icon: "mobileapp", title: "Mobile App (Coming Soon)", description: "Fast, secure, and intuitive" }
        ]).map((p, i) => (
          <ListItem
            key={i}
            item={p}
            onUpdate={(field, v) => updateNested("platforms", i, field, v)}
            onRemove={() => removeItem("platforms", i)}
            fields={[
              { key: "title", label: "Platform Title" },
              { key: "description", label: "Description" },
            ]}
          />
        ))}
        <button onClick={() => addItem("platforms", { title: "", description: "" })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Platform
        </button>
      </>
    )},
    { id: "accounts", title: "Accounts Section", defaultOpen: true, content: (
      <>
        <Input label="Section Title" value={data.accountsTitle || "Choose The Right Account For You"} onChange={(v) => update("accountsTitle", v)} />
        <Input label="Subtitle" value={data.accountsSubtitle || "Start Your Journey With An Account Tailored To Your Goals"} onChange={(v) => update("accountsSubtitle", v)} />
        {(data.accounts || [
          { type: "Smart Choice", deposit: "$100", spreads: "From 1.4 pips", leverage: "Up to 1:500", commission: "No", execution: "Instant", bestFor: "Beginners & Casual Traders" },
          { type: "Smart Pro", deposit: "$1000", spreads: "From 1.0 pips", leverage: "Up to 1:1000", commission: "No", execution: "Market", bestFor: "Intermediate Traders" },
          { type: "Smart ECN", deposit: "$5000", spreads: "From 0.0 pips", leverage: "Up to 1:1000", commission: "$6/lot", execution: "Market", bestFor: "Professionals & Scalpers" },
          { type: "Smart Elite", deposit: "On Request Only", spreads: "Customizable", leverage: "Customizable 1:1000", commission: "Custom", execution: "Market", bestFor: "Professionals" }
        ]).map((a, i) => (
          <ListItem
            key={i}
            item={a}
            onUpdate={(field, v) => updateNested("accounts", i, field, v)}
            onRemove={() => removeItem("accounts", i)}
            fields={[
              { key: "type", label: "Account Type" },
              { key: "deposit", label: "Minimum Deposit" },
              { key: "spreads", label: "Spreads from" },
              { key: "leverage", label: "Leverage" },
              { key: "commission", label: "Commission" },
              { key: "execution", label: "Execution" },
              { key: "bestFor", label: "Best For" },
            ]}
          />
        ))}
        <button onClick={() => addItem("accounts", { type: "", deposit: "", spreads: "", leverage: "", commission: "", execution: "", bestFor: "" })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Account Type
        </button>
      </>
    )},
    { id: "awards", title: "Awards Section", defaultOpen: true, content: (
      <>
        <Input label="Section Title" value={data.awardsTitle || "Recognized For Excellence"} onChange={(v) => update("awardsTitle", v)} />
        {(data.awards || [
          { year: 2025, title: "World Forex Award", subtitle: "Best IB Program" },
          { year: 2025, title: "World Financial Award", subtitle: "Trusted Financial Services" },
          { year: 2023, title: "Iconic Finance Expo", subtitle: "Innovative Startup In Finance" }
        ]).map((a, i) => (
          <ListItem
            key={i}
            item={a}
            onUpdate={(field, v) => updateNested("awards", i, field, v)}
            onRemove={() => removeItem("awards", i)}
            fields={[
              { key: "year", label: "Year" },
              { key: "title", label: "Award Title" },
              { key: "subtitle", label: "Subtitle" },
            ]}
          />
        ))}
        <button onClick={() => addItem("awards", { year: "", title: "", subtitle: "" })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Award
        </button>
      </>
    )},
    { id: "marketData", title: "Market Data Section", defaultOpen: true, content: (
      <>
        {(data.marketData || [
          { icon: "bitcoin2", title: "Forex", price: "$56,623.54", percent: "+1.41%", graph: "curve1" },
          { icon: "crypto2", title: "Crypto", price: "$4,267.90", percent: "+2.22%", graph: "curve2" },
          { icon: "bitcoin2", title: "Indices", price: "$1,289.33", percent: "-0.44%", graph: "curve1" },
          { icon: "crypto2", title: "Metals", price: "$2,143.11", percent: "+0.67%", graph: "curve2" },
          { icon: "crypto2", title: "Stocks", price: "$823.77", percent: "+3.12%", graph: "curve2" }
        ]).map((m, i) => (
          <ListItem
            key={i}
            item={m}
            onUpdate={(field, v) => updateNested("marketData", i, field, v)}
            onRemove={() => removeItem("marketData", i)}
            fields={[
              { key: "icon", label: "Icon" },
              { key: "title", label: "Title" },
              { key: "price", label: "Price" },
              { key: "percent", label: "Percent" },
              { key: "graph", label: "Graph" },
            ]}
          />
        ))}
        <button onClick={() => addItem("marketData", { icon: "", title: "", price: "", percent: "", graph: "" })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Market Data
        </button>
      </>
    )},
    { id: "markets", title: "Markets Section", defaultOpen: true, content: (
      <>
        {(data.markets || [
          { category: 'Forex', assets: 'Major & Minor Currency Pairs', iconSrc: 'forex', highlight: false },
          { category: 'Cryptocurrencies', assets: 'BTC, ETH, XCH & More', iconSrc: 'crypto', highlight: false },
          { category: 'Commodities', assets: 'Gold, Oil, Silver', iconSrc: 'commodities', highlight: false },
          { category: 'Indices', assets: 'S&P 500, NASDAQ, FTSE', iconSrc: 'indices', highlight: false },
          { category: 'Stocks', assets: 'Top-tier & second equities', iconSrc: 'stocks', highlight: false },
        ]).map((m, i) => (
          <ListItem
            key={i}
            item={m}
            onUpdate={(field, v) => updateNested("markets", i, field, v)}
            onRemove={() => removeItem("markets", i)}
            fields={[
              { key: "category", label: "Category" },
              { key: "assets", label: "Assets" },
              { key: "iconSrc", label: "Icon Source" },
              { key: "highlight", label: "Highlight", type: "checkbox" },
            ]}
          />
        ))}
        <button onClick={() => addItem("markets", { category: "", assets: "", iconSrc: "", highlight: false })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Market
        </button>
      </>
    )},
    { id: "accountTypes", title: "Account Types Section", defaultOpen: true, content: (
      <>
        {(data.accountTypes || [
          { id: 1, title: 'SMART START' },
          { id: 2, title: 'SMART CHOICE' },
          { id: 3, title: 'SMART PRO' },
          { id: 4, title: 'SMART ELITE' },
          { id: 5, title: 'SMART VIP' }
        ]).map((a, i) => (
          <ListItem
            key={i}
            item={a}
            onUpdate={(field, v) => updateNested("accountTypes", i, field, v)}
            onRemove={() => removeItem("accountTypes", i)}
            fields={[
              { key: "id", label: "ID" },
              { key: "title", label: "Title" },
            ]}
          />
        ))}
        <button onClick={() => addItem("accountTypes", { id: "", title: "" })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Add Account Type
        </button>
      </>
    )},
    { id: "market", title: "Market Section", defaultOpen: true, content: (
      <>
        <Input label="Section Title" value={data.marketTitle || "Markets"} onChange={(v) => update("marketTitle", v)} />
        <Input label="Section Description" value={data.marketDescription || ""} onChange={(v) => update("marketDescription", v)} type="textarea" placeholder="Optional description for the market section" />

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Market Tabs Configuration</label>
          {(data.marketTabs || [
            { title: "Forex", description: "Trade major and minor currency pairs", buttonText: "Start Trading", speed: "normal", carouselItems: [] },
            { title: "Crypto", description: "Access popular cryptocurrencies", buttonText: "Trade Crypto", speed: "normal", carouselItems: [] },
            { title: "Indices", description: "Trade major stock indices", buttonText: "Trade Indices", speed: "normal", carouselItems: [] },
            { title: "Commodities", description: "Invest in commodities", buttonText: "Trade Commodities", speed: "normal", carouselItems: [] },
            { title: "Stocks", description: "Access global stocks", buttonText: "Trade Stocks", speed: "normal", carouselItems: [] },
            { title: "ETFs", description: "Diversify with ETFs", buttonText: "Trade ETFs", speed: "normal", carouselItems: [] }
          ]).map((tab, i) => (
            <div key={i} className="border rounded-md p-3 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{tab.title}</h4>
                <button
                  onClick={() => removeItem("marketTabs", i)}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <Input
                  label="Tab Title"
                  value={tab.title}
                  onChange={(v) => updateNested("marketTabs", i, "title", v)}
                />
                <Input
                  label="Button Text"
                  value={tab.buttonText || ""}
                  onChange={(v) => updateNested("marketTabs", i, "buttonText", v)}
                />
              </div>

              <Input
                label="Description"
                value={tab.description || ""}
                onChange={(v) => updateNested("marketTabs", i, "description", v)}
                type="textarea"
              />

              <div className="grid grid-cols-3 gap-3 mb-3">
                <Input
                  label="Icon"
                  value={tab.icon || ""}
                  onChange={(v) => updateNested("marketTabs", i, "icon", v)}
                />
                <Select
                  label="Animation Speed"
                  value={tab.speed || "normal"}
                  onChange={(v) => updateNested("marketTabs", i, "speed", v)}
                  options={[
                    { value: "slow", label: "Slow" },
                    { value: "normal", label: "Normal" },
                    { value: "fast", label: "Fast" }
                  ]}
                />
              </div>

              <ImageUploader
                label="Animation Image"
                value={tab.animationImage || ""}
                onChange={(v) => updateNested("marketTabs", i, "animationImage", v)}
              />

              {/* Carousel Items Section */}
              <div className="mt-4 pt-3 border-t">
                <label className="block text-sm font-medium text-gray-700 mb-2">Carousel Items ({(tab.carouselItems || []).length})</label>
                {(tab.carouselItems || []).map((item, itemIdx) => (
                  <div key={itemIdx} className="border rounded p-2 mb-2 bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Item {itemIdx + 1}</span>
                      <button
                        onClick={() => {
                          const items = [...(tab.carouselItems || [])];
                          items.splice(itemIdx, 1);
                          updateNested("marketTabs", i, "carouselItems", items);
                        }}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        label="Icon"
                        value={item.icon || ""}
                        onChange={(v) => {
                          const items = [...(tab.carouselItems || [])];
                          items[itemIdx].icon = v;
                          updateNested("marketTabs", i, "carouselItems", items);
                        }}
                      />
                      <Input
                        label="Text"
                        value={item.text || ""}
                        onChange={(v) => {
                          const items = [...(tab.carouselItems || [])];
                          items[itemIdx].text = v;
                          updateNested("marketTabs", i, "carouselItems", items);
                        }}
                      />
                      <Input
                        label="Subtext"
                        value={item.subtext || ""}
                        onChange={(v) => {
                          const items = [...(tab.carouselItems || [])];
                          items[itemIdx].subtext = v;
                          updateNested("marketTabs", i, "carouselItems", items);
                        }}
                      />
                      <Input
                        label="Price"
                        value={item.price || ""}
                        onChange={(v) => {
                          const items = [...(tab.carouselItems || [])];
                          items[itemIdx].price = v;
                          updateNested("marketTabs", i, "carouselItems", items);
                        }}
                      />
                      <Input
                        label="Change"
                        value={item.change || ""}
                        onChange={(v) => {
                          const items = [...(tab.carouselItems || [])];
                          items[itemIdx].change = v;
                          updateNested("marketTabs", i, "carouselItems", items);
                        }}
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const items = [...(tab.carouselItems || [])];
                    items.push({ icon: "", text: "", subtext: "", price: "", change: "" });
                    updateNested("marketTabs", i, "carouselItems", items);
                  }}
                  className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                >
                  + Add Carousel Item
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => addItem("marketTabs", {
            title: "New Tab",
            description: "",
            buttonText: "Learn More",
            speed: "normal",
            carouselItems: []
          })} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            + Add Tab
          </button>
        </div>
      </>
    )},
    { id: "design", title: "Design & Styling", defaultOpen: true, content: (
      <>
        <Select label="Font Family" value={data.fontFamily || "Arial, sans-serif"} onChange={(v) => update("fontFamily", v)} options={fontOptions} />
        <div className="grid grid-cols-2 gap-3">
          <ColorInput label="Primary" value={data.colors?.primary || "#3b82f6"} onChange={(v) => update("colors", { ...data.colors, primary: v })} />
          <ColorInput label="Secondary" value={data.colors?.secondary || "#6b7280"} onChange={(v) => update("colors", { ...data.colors, secondary: v })} />
          <ColorInput label="Tertiary" value={data.colors?.tertiary || "#9ca3af"} onChange={(v) => update("colors", { ...data.colors, tertiary: v })} />
          <ColorInput label="Background" value={data.colors?.bg || "#ffffff"} onChange={(v) => update("colors", { ...data.colors, bg: v })} />
          <ColorInput label="Text Color" value={data.colors?.text || "#1f2937"} onChange={(v) => update("colors", { ...data.colors, text: v })} />
          <ColorInput label="Heading Color" value={data.colors?.heading || "#1f2937"} onChange={(v) => update("colors", { ...data.colors, heading: v })} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SliderInput
            label="Title Font Size"
            value={parseFloat(data.titleFontSize) || 48}
            onChange={(v) => update("titleFontSize", v)}
            min={24}
            max={72}
            unit="px"
          />
          <SliderInput
            label="Description Font Size"
            value={parseFloat(data.descriptionFontSize) || 20}
            onChange={(v) => update("descriptionFontSize", v)}
            min={12}
            max={32}
            unit="px"
          />
          <SliderInput
            label="Heading Font Size"
            value={parseFloat(data.headingFontSize) || 32}
            onChange={(v) => update("headingFontSize", v)}
            min={16}
            max={48}
            unit="px"
          />
          <SliderInput
            label="Body Font Size"
            value={parseFloat(data.bodyFontSize) || 16}
            onChange={(v) => update("bodyFontSize", v)}
            min={12}
            max={24}
            unit="px"
          />
          <SliderInput
            label="Button Border Radius"
            value={parseFloat(data.buttonBorderRadius) || 8}
            onChange={(v) => update("buttonBorderRadius", v)}
            min={0}
            max={32}
            unit="px"
          />
          <SliderInput
            label="Card Border Radius"
            value={parseFloat(data.cardBorderRadius) || 8}
            onChange={(v) => update("cardBorderRadius", v)}
            min={0}
            max={32}
            unit="px"
          />
        </div>

        <IconSelect
          label="Text Alignment"
          value={data.textAlign || "center"}
          onChange={(v) => update("textAlign", v)}
          options={alignmentOptions}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Background Gradient</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={data.bgGradientEnabled || false}
              onChange={(e) => update("bgGradientEnabled", e.target.checked)}
            />
            <span className="text-sm">Enable Gradient</span>
          </div>
          {data.bgGradientEnabled && (
            <div className="grid grid-cols-2 gap-3">
              <ColorInput label="Gradient Start" value={data.bgGradientStart || "#ffffff"} onChange={(v) => update("bgGradientStart", v)} />
              <ColorInput label="Gradient End" value={data.bgGradientEnd || "#f8fafc"} onChange={(v) => update("bgGradientEnd", v)} />
            </div>
          )}
        </div>
      </>
    )},
  ];

  const [collapsedSections, setCollapsedSections] = useState(() => {
    const initial = {};
    sections.forEach(section => {
      initial[section.id] = !section.defaultOpen;
    });
    return initial;
  });

  const toggleSection = (sectionId) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const update = (key, value) => {
    dispatch(updatePageData({ [key]: value }));
  };

  const updateNested = (key, index, field, value) => {
    const list = [...(data[key] || [])];
    list[index][field] = value;
    dispatch(updatePageData({ [key]: list }));
  };

  const addItem = (key, template) =>
    update(key, [...(data[key] || []), template]);

  const removeItem = (key, index) =>
    update(key, data[key].filter((_, i) => i !== index));

  const openStyleModal = (fieldType) => {
    setStyleModal({ isOpen: true, fieldType });
  };

  const closeStyleModal = () => {
    setStyleModal({ isOpen: false, fieldType: null });
  };

  const updateStyles = (fieldType, newStyles) => {
    update(`${fieldType}Styles`, newStyles);
  };

  const handleRemoveSection = (sectionId) => {
    dispatch(removeSection(sectionId));
  };

  const [showAddModal, setShowAddModal] = useState(false);

  const availableSections = [
    { id: "hero", title: "Hero Section", description: "Main heading, subheading, and call-to-action buttons" },
    { id: "features", title: "Features Section", description: "Key features with icons" },
    { id: "whyChoose", title: "Why Choose Section", description: "Why choose this service with phone mockup" },
    { id: "platforms", title: "Platforms Section", description: "Trading platforms available" },
    { id: "accounts", title: "Accounts Section", description: "Account types table" },
    { id: "awards", title: "Awards Section", description: "Awards and recognitions" },
    { id: "marketData", title: "Market Data Section", description: "Live market data cards" },
    { id: "markets", title: "Markets Section", description: "Available trading markets" },
    { id: "accountTypes", title: "Account Types Section", description: "Different account types" },
    { id: "market", title: "Market Section", description: "Market section with tabs for different asset classes" },
    { id: "design", title: "Design & Styling", description: "Customize colors, fonts, and layout" },
  ];

  const addSection = (sectionId) => {
    const currentOrder = data.sectionOrder || [];
    if (!currentOrder.includes(sectionId)) {
      update("sectionOrder", [...currentOrder, sectionId]);
    }
    setShowAddModal(false);
  };

  const defaultSections = ['hero', 'features', 'whyChoose', 'platforms', 'market'];
  const orderedSections = (data.sectionOrder || defaultSections)
    .map(id => sections.find(s => s.id === id))
    .filter(Boolean);

  return (
    <>
      <div className={`max-w-2xl mx-auto p-4 space-y-6 font-sans`}>
        {orderedSections.map((section) => (
          <div key={section.id} className="bg-white border rounded-lg shadow-sm mb-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="p-1 text-gray-500 hover:text-gray-700 transition"
                  title={collapsedSections[section.id] ? "Expand Section" : "Collapse Section"}
                >
                  {collapsedSections[section.id] ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                </button>
                <h3 className="font-medium text-gray-900">{section.title}</h3>
              </div>
              <button
                onClick={() => handleRemoveSection(section.id)}
                className="p-1 text-red-500 hover:text-red-700 transition"
                title="Remove Section"
              >
                <Trash size={16} />
              </button>
            </div>
            {!collapsedSections[section.id] && (
              <div className="p-4">
                {section.content}
              </div>
            )}
          </div>
        ))}
        <button onClick={() => setShowAddModal(true)} className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
          + Add Section
        </button>
      </div>
      <AddSectionModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        availableSections={availableSections}
        addSection={addSection}
        sectionOrder={data.sectionOrder || []}
      />
    </>
  );
}
