const T_LITERATOR_CONFIGS = {
    krymskotatarska: {
        code: "krymskotatarska",
        name: "Кримськотатарська",
        desc: "Транслітерація кримськотатарської латинки на українську",
        author: "Ілля Пишняк",
        link: "https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BC%D1%81%D1%8C%D0%BA%D0%BE%D1%82%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%8C%D0%BA%D0%B0_%D0%BC%D0%BE%D0%B2%D0%B0#%D0%92%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BB%D1%96%D1%82%D0%B5%D1%80",
        from: "lat",
        to: "ukr",
        useLocationInWordAlgo: !0,
        affectVowelNotConsonantWhenSofting: !0,
        beforeStartDict: {
            " bu": " bу",
            " cu": " cу",
            " çu": " çу",
            " du": " dу",
            " fu": " fу",
            " gu": " gу",
            " ğu": " ğу",
            " hu": " hу",
            " ju": " jу",
            " ku": " kу",
            " lu": " lу",
            " mu": " mу",
            " nu": " nу",
            " ñu": " ñу",
            " pu": " pу",
            " qu": " qу",
            " ru": " rу",
            " su": " sу",
            " şu": " şу",
            " tu": " tу",
            " vu": " vу",
            " yu": " yу",
            " zu": " zу",
            "-bu": "-bу",
            "-cu": "-cу",
            "-çu": "-çу",
            "-du": "-dу",
            "-fu": "-fу",
            "-gu": "-gу",
            "-ğu": "-ğу",
            "-hu": "-hу",
            "-ju": "-jу",
            "-ku": "-kу",
            "-lu": "-lу",
            "-mu": "-mу",
            "-nu": "-nу",
            "-ñu": "-ñу",
            "-pu": "-pу",
            "-qu": "-qу",
            "-ru": "-rу",
            "-su": "-sу",
            "-şu": "-şу",
            "-tu": "-tу",
            "-vu": "-vу",
            "-yu": "-yу",
            "-zu": "-zу",
            "Bu": "Bу",
            "Cu": "Cу",
            "Çu": "Çу",
            "Du": "Dу",
            "Fu": "Fу",
            "Gu": "Gу",
            "Ğu": "Ğу",
            "Hu": "Hу",
            "Ju": "Jу",
            "Ku": "Kу",
            "Lu": "Lу",
            "Mu": "Mу",
            "Nu": "Nу",
            "Ñu": "Ñу",
            "Pu": "Pу",
            "Qu": "Qу",
            "Ru": "Rу",
            "Su": "Sу",
            "Şu": "Şу",
            "Tu": "Tу",
            "Vu": "Vу",
            "Yu": "Yу",
            "Zu": "Zу",
            "kirim": "кірім",
            "lviv": "львів",
            "baar": "баарь",
            "faal": "фааль",
            "sual": "суаль",
            "işğal": "ішгаль",
            "meşğul": "мєшгӯль",
            "sulh": "сульх",
            "qalp": "қальп",
            "tavuq": "тавуқ",
            "uzun": "узун",
            "armut": "армут",
            "qya": "q'ya",
            "lâ": "ля",
            "lö": "льо",
            "lü": "лю",
            "le": "лє",
            "li": "лі",
            "ül": "üль",
            "İl": "İль",
            "il": "iль",
            "el": "eль",
            "öl": "öль",
            "şç": "щ",
            "ts": "ц"
        },
        dict: {
            "а": "а",
            "â": "я",
            "b": "б",
            "c": "джь",
            "ç": "чь",
            "d": "д",
            "e": "е",
            "f": "ф",
            "g": "ґ",
            "ğ": "г",
            "h": "х",
            "ı": "и",
            "i": "і",
            "İ": "І",
            "j": "ж",
            "k": "к",
            "l": "л",
            "m": "м",
            "n": "н",
            "ñ": "ң",
            "o": "о",
            "ö": "ӧ",
            "p": "п",
            "q": "қ",
            "r": "р",
            "s": "с",
            "ş": "ш",
            "t": "т",
            "u": ["у", "у", "ӯ"],
            "ü": "ӱ",
            "v": "в",
            "y": "й",
            "z": "з",
            "x": "кс",
            "w": "в"
        },
        softingVowelsMultiDict: {
            "ö": {
                affecting: "ьо",
                affected: "о"
            },
            "e": {
                affecting: "є",
                affected: "е"
            },
            "ü": {
                affecting: "ӯ",
                affected: "ӱ"
            },
            "u": {
                affecting: "ӯ",
                affected: "у"
            },
            "iy": "ій",
            "i": {
                affecting: "и",
                affected: "і"
            }
        },
        softableConsonantsDict: {
            "b": "бь",
            "d": "дь",
            "f": "фь",
            "g": "ґь",
            "ğ": "гь",
            "h": "хь",
            "j": "жь",
            "k": "кь",
            "l": "ль",
            "m": "мь",
            "n": "нь",
            "ñ": "ңь",
            "p": "пь",
            "r": "рь",
            "s": "сь",
            "ş": "ш",
            "t": "ть",
            "v": "вь",
            "z": "зь",
            "x": "ксь",
            "w": "вь"
        },
        unsoftableConsonants: ["y", "q"],
        apostrophesSingleKeyDict: {
            "'`‘’": "'"
        },
        afterFinishDict: {
            "йa": "я",
            "ьa": "я",
            "йі": "ї",
            "йе": "є",
            "ье": "є",
            "ьі": "і",
            "ьи": "и",
            "йӱ": "ю",
            "йу": "ю",
            "дє": "де",
            "тє": "те",
            "шє": "ше",
            "джьі": "джі",
        },
        substitutionForUndefinedResult: "",
        sortByMe: "krymskotatarska",
        isEssential: !0,
        isNotEssential_Unconventional: !1,
        isNotEssential_Fun: !1,
        isNotEssential_Minor: !1
    }, 
    krymskotatarska_sproshchena: {
        code: "krymskotatarska_sproshchena",
        name: "Спрощена",
        desc: "Спрощена транслітерація кримськотатарської латинки на українську",
        author: "Ілля Пишняк",
        link: "https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BC%D1%81%D1%8C%D0%BA%D0%BE%D1%82%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%8C%D0%BA%D0%B0_%D0%BC%D0%BE%D0%B2%D0%B0#%D0%92%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BB%D1%96%D1%82%D0%B5%D1%80",
        from: "lat",
        to: "ukr",
        useLocationInWordAlgo: !0,
        affectVowelNotConsonantWhenSofting: !0,
        beforeStartDict: {
            "kirim": "кірім",
            "lviv": "львів",
            "baar": "баарь",
            "faal": "фааль",
            "sual": "суаль",
            "işğal": "ішгаль",
            "meşğul": "мєшгуль",
            "sulh": "сульх",
            "qalp": "хальп",
            "tavuq": "тавух",
            "uzun": "узун",
            "armut": "армут",
            "qya": "q'ya",
            "yü": "ю",
            "lâ": "ля",
            "lö": "льо",
            "lü": "лю",
            "le": "лє",
            "li": "лі",
            "ül": "üль",
            "İl": "İль",
            "il": "iль",
            "el": "eль",
            "öl": "öль",
            "şç": "щ",
            "ts": "ц"
        },
        dict: {
            "а": "а",
            "â": "я",
            "b": "б",
            "c": "джь",
            "ç": "чь",
            "d": "д",
            "e": "е",
            "f": "ф",
            "g": "ґ",
            "ğ": "г",
            "h": "х",
            "ı": "и",
            "i": "і",
            "İ": "І",
            "j": "ж",
            "k": "к",
            "l": "л",
            "m": "м",
            "n": "н",
            "ñ": "н",
            "o": "о",
            "ö": "о",
            "p": "п",
            "q": "х",
            "r": "р",
            "s": "с",
            "ş": "ш",
            "t": "т",
            "u": "у",
            "ü": "ю",
            "v": "в",
            "y": "й",
            "z": "з",
            "x": "кс",
            "w": "в"
        },
        softingVowelsMultiDict: {
            "ö": {
                affecting: "ьо",
                affected: "о"
            },
            "e": {
                affecting: "є",
                affected: "е"
            },
            "ü": {
                affecting: "ю",
                affected: "ю"
            },
            "u": {
                affecting: "у",
                affected: "у"
            },
            "iy": "ій",
            "i": {
                affecting: "и",
                affected: "і"
            }
        },
        softableConsonantsDict: {
            "b": "бь",
            "d": "дь",
            "f": "фь",
            "g": "ґь",
            "ğ": "гь",
            "h": "хь",
            "j": "жь",
            "k": "кь",
            "l": "ль",
            "m": "мь",
            "n": "нь",
            "ñ": "нь",
            "p": "пь",
            "r": "рь",
            "s": "сь",
            "ş": "ш",
            "t": "ть",
            "v": "вь",
            "z": "зь",
            "x": "ксь",
            "w": "вь"
        },
        unsoftableConsonants: ["y", "q"],
        apostrophesSingleKeyDict: {
            "'`‘’": "'"
        },
        afterFinishDict: {
            "йa": "я",
            "ьa": "я",
            "йі": "ї",
            "йе": "є",
            "ье": "є",
            "ьі": "і",
            "ьи": "и",
            "йу": "ю",
            "дє": "де",
            "тє": "те",
            "шє": "ше",
            "джьі": "джі",
        },
        substitutionForUndefinedResult: "",
        sortByMe: "krymskotatarska_sproshchena",
        isEssential: !0,
        isNotEssential_Unconventional: !1,
        isNotEssential_Fun: !1,
        isNotEssential_Minor: !1
    }
};
class DefaultConfigReaderFromGitHub {
    static #PROJECT_HOME_LINK = "https://raw.githubusercontent.com/cor-bee/t-literator-configs/master/";
    getConfigObject(t) {
        if (null == t || !t.length) return {};
        let e = DefaultConfigReaderFromGitHub.#httpGet(DefaultConfigReaderFromGitHub.#PROJECT_HOME_LINK + `src/${t}.config`);
        return e = e.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1"), e = e.replace(/[\u202F\u00A0]/g, " "), JSON.parse(e)
    }
    static #httpGet(t) {
        const e = "undefined" == typeof window ? require("xmlhttprequest").XMLHttpRequest : XMLHttpRequest,
            i = new e;
        return i.open("GET", t, !1), i.send(null), i.responseText
    }
}
"undefined" == typeof window && (module.exports = DefaultConfigReaderFromGitHub);
class StringValueOrArrayHelpers {
    static toTitleCase(e) {
        if (null == e) return null;
        if (Array.isArray(e)) {
            const o = [...e];
            for (let t = 0; t < o.length; ++t) o[t] = StringValueOrArrayHelpers.toTitleCase(o[t]);
            return o
        }
        var i;
        for (let t = 0; t < e.length; ++t)
            if (null != (i = e.charAt(t)) && i.toLowerCase() !== i.toUpperCase()) return e.slice(0, t + 1).toUpperCase() + e.slice(t + 1);
        return e
    }
    static toUpperCase(t, e) {
        if (null == t) return null;
        if (Array.isArray(t)) {
            const n = [...t];
            for (let t = 0; t < n.length; ++t) n[t] = StringValueOrArrayHelpers.toUpperCase(n[t]);
            return n
        }
        let i = t;
        for (var [o, s] of Object.entries(e ?? {})) i = i.replaceAll(o, s);
        return i.toUpperCase()
    }
    static toDiacriticless(t) {
        if (null == t) return null;
        if (Array.isArray(t)) {
            const i = [...t];
            for (let t = 0; t < i.length; ++t) i[t] = StringValueOrArrayHelpers.toDiacriticless(i[t]);
            return i
        }
        var e = {
            "ł": "l",
            "Ł": "L"
            // "ı": "i"
            // "İ": "I"
        };
        return null != e[t] ? e[t] : t.normalize("NFD").replace(/\p{Diacritic}/gu, "")
    }
    static flatValuesAt(t, e) {
        const i = e ? 1 : 0;
        return Object.values(t).flatMap(t => t.constructor === Object ? StringValueOrArrayHelpers.flatValuesAt(t, e) : t[i])
    }
}
"undefined" == typeof window && (module.exports = StringValueOrArrayHelpers);
const Hlprs = "undefined" == typeof window ? require("./0-string-value-or-array-helpers") : StringValueOrArrayHelpers;
class NormalizedConfig {
    static AFFECTING = "affecting";
    static AFFECTED = "affected";
    #config = null;
    #cache = {};
    constructor(t) {
        this.#config = {
            ...t
        }, this.#ensureNormalized()
    }
    get #configCopy() {
        return {
            ...this.#config
        }
    }
    get code() {
        return this.#config.code
    }
    get name() {
        return this.#config.name
    }
    get desc() {
        return this.#config.desc
    }
    get link() {
        return this.#config.link
    }
    get from() {
        return this.#config.from
    }
    get to() {
        return this.#config.to
    }
    get year() {
        return this.#config.year
    }
    get useLocationInWordAlgo() {
        return this.#config.useLocationInWordAlgo
    }
    get affectVowelNotConsonantWhenSofting() {
        return this.#config.affectVowelNotConsonantWhenSofting
    }
    get dict() {
        return this.#config.dict
    }
    get otherLanguagesLettersDict() {
        return this.#config.otherLanguagesLettersDict
    }
    get unsoftableConsonants() {
        return this.#config.unsoftableConsonants
    }
    get softableConsonantsDict() {
        return this.#config.softableConsonantsDict
    }
    get softingVowelsMultiDict() {
        return this.#config.softingVowelsMultiDict
    }
    get softingSignsMultiDict() {
        return this.#config.softingSignsMultiDict
    }
    get apostrophesSingleKeyDict() {
        return this.#config.apostrophesSingleKeyDict
    }
    get exceptionalCaseRules() {
        return this.#config.exceptionalCaseRules
    }
    get specSymbolsDict() {
        return this.#config.specSymbolsDict
    }
    get substitutionForErrors() {
        return this.#config.substitutionForErrors
    }
    get beforeStartDict() {
        return this.#config.beforeStartDict
    }
    get afterFinishDict() {
        return this.#config.afterFinishDict
    }
    getProperty(t) {
        if (this.#config.hasOwnProperty(t)) return this.#configCopy[t]
    }
    get isEmpty() {
        return null != this.#config
    }
    get isNormalized() {
        return this.#config.isNormalized
    }
    getSourceAlphabet(t, e) {
        var i = e ? "withOtherLangLetters" : "withoutOtherLangLetters";
        this.#cache[i] || (this.#cache[i] = this.#doGetSourceAlphabet(e));
        i = this.#cache[i];
        return t ? this.#makeLowerAlphabet(i) : i
    }
    #doGetSourceAlphabet(e) {
        const i = this.#config,
            t = [i.unsoftableConsonants, ...Object.keys(i.softingSignsMultiDict), ...Object.keys(i.dict), ...Object.keys(i.softableConsonantsDict), ...Object.keys(i.softingVowelsMultiDict), ...Object.keys(i.beforeStartDict), ...e ? Object.keys(i.otherLanguagesLettersDict) : []];
        var o = t.flatMap(t => [...t]);
        const s = [...new Set(o)];
        return s.filter(t => !!e || !Object.keys(i.otherLanguagesLettersDict).includes(t)).sort(NormalizedConfig.alphabetOrderComparator)
    }
    #makeLowerAlphabet(t) {
        t = t.map(t => t.toLowerCase());
        return [...new Set(t)]
    }
    static alphabetOrderComparator(t, e) {
        var i = "'’*".includes(t) !== "'’*".includes(e) ? -1 : 1;
        for (const n of ["AaÂâȦȧÄä", "EeĖėËë", "IıİiÏï", "OoȮȯÖö", "UuU̇u̇Üü", "YyẎẏŸÿ"]) {
            var o = n.includes(t),
                s = n.includes(e);
            if (o || s) {
                if (o && s) return n.indexOf(t).toString().localeCompare(n.indexOf(e).toString());
                o && (t = n[0]), s && (e = n[0]);
                break
            }
        }
        return i * t.localeCompare(e, "uk", {
            caseFirst: "upper"
        })
    }
    getDigraphs() {
        var t = this.#config;
        let e = [];
        for (const o of [t.beforeStartDict, t.dict, t.apostrophesSingleKeyDict, t.softableConsonantsDict, t.softingVowelsMultiDict, t.softingSignsMultiDict, t.otherLanguagesLettersDict, t.afterFinishDict]) e = e.concat(Hlprs.flatValuesAt(o, !1));
        const i = [];
        for (const s of e) null != s && 1 < s.length && i.push(s.toLowerCase());
        return i.filter((t, e, i) => i.indexOf(t) === e)
    }
    #ensureNormalized() {
        const t = this.#config;
        if (!t.isNormalized) {
            t.code = t.code ?? "code" + Math.floor(1e3 * Math.random()), t.name = t.name ?? "Unnamed", t.desc = t.desc ?? "", t.link = t.link ?? "", t.from = t.from ?? "", t.to = t.to ?? "", t.exceptionalCaseRules = t.exceptionalCaseRules ?? {}, t.affectVowelNotConsonantWhenSofting = t.affectVowelNotConsonantWhenSofting ?? !1, t.useLocationInWordAlgo = t.useLocationInWordAlgo ?? !1, t.unsoftableConsonants = t.unsoftableConsonants ?? [], t.softableConsonantsDict = NormalizedConfig.#getNormalizedDictStructure(t.softableConsonantsDict), t.dict = NormalizedConfig.#getNormalizedDictStructure(t.dict), t.otherLanguagesLettersDict = NormalizedConfig.#getNormalizedDictStructure(t.otherLanguagesLettersDict), t.specSymbolsDict = NormalizedConfig.#getNormalizedDictStructure(t.specSymbolsDict), t.beforeStartDict = NormalizedConfig.#getNormalizedDictStructure(t.beforeStartDict), t.afterFinishDict = NormalizedConfig.#getNormalizedDictStructure(t.afterFinishDict), t.softingSignsMultiDict = NormalizedConfig.#getNormalizedMultiDictStructure(t.softingSignsMultiDict), t.softingVowelsMultiDict = NormalizedConfig.#getNormalizedMultiDictStructure(t.softingVowelsMultiDict), this.#normalizeApostrophesSingleKeyDict(), NormalizedConfig.#completeByUpperAndTitleCased(t.beforeStartDict);
            for (const e of [t.unsoftableConsonants, t.softableConsonantsDict, t.dict, t.otherLanguagesLettersDict, t.softingSignsMultiDict, t.softingVowelsMultiDict, t.afterFinishDict]) NormalizedConfig.#completeByUpperAndTitleCased(e);
            t.isNormalized = !0
        }
    }
    #normalizeApostrophesSingleKeyDict() {
        const i = this.#config;
        let t;
        if (null != i.apostrophesSingleKeyDict && (t = Object.keys(i.apostrophesSingleKeyDict)), null != t && t.length) {
            let e = 0;
            t.forEach(t => 0 == e++ || delete i.apostrophesSingleKeyDict[t])
        } else i.apostrophesSingleKeyDict = {
            "": ""
        }
    }
    static #getNormalizedDictStructure(t) {
        const e = {};
        if (null == t) return e;
        for (const n of Object.keys(t)) {
            var i = !Array.isArray(t[n]),
                o = Array.isArray(t[n]) && 0 === t[n].length,
                s = Array.isArray(t[n]) && 3 === t[n].length;
            e[n] = i || s ? [t[n]] : o ? [""] : t[n]
        }
        return e
    }
    static #getNormalizedMultiDictStructure(t) {
        const e = {};
        if (null == t) return e;
        for (const o of Object.keys(t))
            if (t[o].constructor !== Object) {
                var i = t[o];
                const s = {};
                s[NormalizedConfig.AFFECTED] = i, s[NormalizedConfig.AFFECTING] = i, e[o] = NormalizedConfig.#getNormalizedDictStructure(s)
            } else e[o] = NormalizedConfig.#getNormalizedDictStructure(t[o]);
        return e
    }
    static #completeByNonDiacritics(t, e) {
        if (t.constructor === Object)
            for (const i of Object.values(t)) i.constructor !== Object ? i.length && (1 === i.length ? i.push(Hlprs.toDiacriticless(i[0])) : e || (i[1] = Hlprs.toDiacriticless(i[1]))) : NormalizedConfig.#completeByNonDiacritics(i)
    }
    static #completeByUpperAndTitleCased(e) {
        var t = [Hlprs.toTitleCase, Hlprs.toUpperCase];
        if (Array.isArray(e)) {
            const l = [];
            for (const c of e)
                for (const u of t) {
                    var i = u(c);
                    e.includes(i) || l.includes(i) || l.push(i)
                }
            l.forEach(t => e.push(t))
        } else
            for (var [o, s] of Object.entries(e))
                for (const f of t) {
                    var n = f(o);
                    if (!e.hasOwnProperty(n))
                        if (Array.isArray(s)) {
                            const g = [];
                            for (const h of s) g.push(f(h));
                            e[n] = g
                        } else {
                            const p = {};
                            for (var [r, a] of Object.entries(s)) {
                                const d = [];
                                for (const D of a) d.push(f(D));
                                p[r] = d
                            }
                            e[n] = p
                        }
                }
    }
}
"undefined" == typeof window && (module.exports = NormalizedConfig);
const NormalizedCfg = "undefined" == typeof window ? require("./1-normalized-config") : NormalizedConfig;
class ConfigsCollection {
    #configs = {};
    constructor(t) {
        if (null != t)
            for (const e of t) this.upsertConfig(e)
    }
    get isEmpty() {
        return 0 === Object.keys(this.#configs).length && Object.getPrototypeOf(this.#configs) === Object.prototype
    }
    get configCodes() {
        return Object.keys(this.#configs)
    }
    get count() {
        return this.configCodes.length
    }
    hasConfig(t) {
        return !this.isEmpty && t in this.#configs
    }
    getConfig(e) {
        if (this.hasConfig(e)) {
            let t = this.#configs[e];
            return t.isNormalized || (this.#configs[e] = new NormalizedCfg(t), t = this.#configs[e]), t
        }
    }
    upsertConfig(t) {
        var e = !this.hasConfig(t.code);
        return this.#configs[t.code] = t, e
    }
    deleteConfig(t) {
        var e = this.hasConfig(t);
        return e && delete this.#configs[t], e
    }
    deleteAll() {
        this.#configs = {}
    }
}
"undefined" == typeof window && (module.exports = ConfigsCollection);
const Helpers = "undefined" == typeof window ? require("./0-string-value-or-array-helpers") : StringValueOrArrayHelpers,
    FromGitHubReader = "undefined" == typeof window ? require("./0-default-config-reader-from-github") : DefaultConfigReaderFromGitHub,
    Config = "undefined" == typeof window ? require("./1-normalized-config") : NormalizedConfig,
    Configs = "undefined" == typeof window ? require("./2-configs-collection") : ConfigsCollection;
class Transliterator {
    #WORD_START = "【⟨";
    #WORD_END = "⟩】";
    static #UPPER_TECH_LETER = "Ꙍ";
    static #LOWER_TECH_LETER = "ꙍ";
    #config = {};
    #configsCache = {};
    #implementingGetConfigObject;
    #useDiacritics = !0;
    constructor(t = new FromGitHubReader, e) {
        let i = [];
        Array.isArray(t) ? i = t : this.#implementingGetConfigObject = t, this.#configsCache = new Configs(i), null != e && this.useConfig(e)
    }
    get config() {
        return {
            ...this.#config
        }
    }
    transliterate(t, e) {
        var i = this.#config;
        this.#useDiacritics = !e;
        var o, s, n, r, a = this.#useDiacritics ? 0 : 1;
        let l = t;
        i.useLocationInWordAlgo && (l = this.#markStartingPositions(l)), l = this.#replaceAllByDict(l, i.beforeStartDict, i.useLocationInWordAlgo);
        const c = Object.keys(i.apostrophesSingleKeyDict)[0];
        for (const C of c.split("")) l = l.replaceAll(C, "⟨≀⟩");
        for ([o, s] of Object.entries(i.softingVowelsMultiDict)) {
            for (const b of i.unsoftableConsonants) {
                var u, f = s[Config.AFFECTED];
                i.useLocationInWordAlgo && Array.isArray(f[a]) && (u = Transliterator.#getPositionalValue(f[a], 2), l = l.replaceAll(b + o + this.#WORD_END, b + u + this.#WORD_END));
                f = Transliterator.#getPositionalValue(f[a]);
                l = l.replaceAll(b + o, b + f)
            }
            for (var [g, h] of Object.entries(i.softableConsonantsDict)) {
                h = i.affectVowelNotConsonantWhenSofting ? g : Transliterator.#getPositionalValue(h[a]);
                i.useLocationInWordAlgo && Array.isArray(s[Config.AFFECTING][a]) && (p = Transliterator.#getPositionalValue(s[Config.AFFECTING][a], 2), l = l.replaceAll(g + o + this.#WORD_END, h + p + this.#WORD_END));
                var p = Transliterator.#getPositionalValue(s[Config.AFFECTING][a]);
                l = l.replaceAll(g + o, h + p)
            }
        }
        for ([n, r] of Object.entries(i.softingSignsMultiDict)) {
            for (const k of i.unsoftableConsonants) l = l.replaceAll(k + n, k + r[Config.AFFECTED][a]);
            for (var [d, D] of Object.entries(i.softableConsonantsDict)) {
                D = Transliterator.#getPositionalValue(D[a]);
                i.useLocationInWordAlgo && Array.isArray(r[Config.AFFECTING][a]) && (y = Transliterator.#getPositionalValue(r[Config.AFFECTING][a], 2), l = l.replaceAll(d + n + this.#WORD_END, D + y + this.#WORD_END));
                var y = Transliterator.#getPositionalValue(r[Config.AFFECTING][a]);
                l = l.replaceAll(d + n, D + y)
            }
            l = l.replaceAll(n, r[Config.AFFECTED][a])
        }
        return l = l.replaceAll("⟨≀⟩", i.apostrophesSingleKeyDict[c]), l = this.#replaceAllByDict(l, i.dict, i.useLocationInWordAlgo), l = this.#replaceAllByDict(l, i.otherLanguagesLettersDict, i.useLocationInWordAlgo), l = this.#replaceAllByDict(l, i.specSymbolsDict, i.useLocationInWordAlgo), i.useLocationInWordAlgo && (l = l.replaceAll(this.#WORD_START, ""), l = l.replaceAll(this.#WORD_END, "")), l = this.#detectAndFixCapsLocked(l), l = this.#replaceAllByDict(l, i.afterFinishDict, i.useLocationInWordAlgo), null != i.substitutionForUndefinedResult && (l = l.replaceAll("undefined", i.substitutionForUndefinedResult)), l
    }
    useConfig(t) {
        var e;
        this.#config.code !== t && (this.#configsCache.hasConfig(t) || (e = this.#implementingGetConfigObject.getConfigObject(t), this.#configsCache.upsertConfig(e)), this.#config = this.#configsCache.getConfig(t))
    }
    getConfigTransliterationInfo(i, o) {
        const s = this.#config,
            n = {};
        var r = s.getSourceAlphabet(!1, !1),
            t = this.#useDiacritics ? 0 : 1;
        const a = Object.keys(s.softableConsonantsDict).find(t => t.toLocaleUpperCase() === t),
            l = Object.keys(s.softableConsonantsDict).find(t => t.toLocaleLowerCase() === t),
            c = s.unsoftableConsonants.find(t => t.toLocaleUpperCase() === t),
            u = s.unsoftableConsonants.find(t => t.toLocaleLowerCase() === t);
        let f, g, h, p;
        null != a && null != l && (f = Transliterator.#getPositionalValue(s.softableConsonantsDict[a][t], 2), g = Transliterator.#getPositionalValue(s.softableConsonantsDict[l][t], 2)), null != c && null != u && (h = this.transliterate(c), p = this.transliterate(u));
        var d = Object.keys(s.softingSignsMultiDict).find(t => t.toLocaleUpperCase() === t),
            D = Object.keys(s.softingSignsMultiDict).find(t => t.toLocaleLowerCase() === t);
        let y, C;
        null != d && null != D && (y = Transliterator.#getPositionalValue(s.softingSignsMultiDict[d][Config.AFFECTING][t], 2), C = Transliterator.#getPositionalValue(s.softingSignsMultiDict[D][Config.AFFECTING][t], 2));
        const b = this.#getSourceVowels(!0);
        for (let t = 0, e = 1; t < r.length - 1; t += 2, e += 2) {
            var k = r[t],
                A = r[e];
            const j = [];
            if (Object.keys(s.softingSignsMultiDict).includes(k)) {
                const _ = this.transliterate(a + k) + " " + this.transliterate(l + A);
                var m = _.replaceAll(f, "").replaceAll(g, "");
                j.push(m);
                const O = this.transliterate(c + k) + " " + this.transliterate(u + A);
                m = O.replaceAll(h, "").replaceAll(p, ""), j.push(m)
            } else {
                var S, E = this.transliterate(k) + " " + this.transliterate(A);
                if (j.push(E), i || (S = (m = this.transliterate(Transliterator.#LOWER_TECH_LETER + A + Transliterator.#LOWER_TECH_LETER)) + " " + m, m = (E = this.transliterate(Transliterator.#LOWER_TECH_LETER + A)) + " " + E, S = (E = function(t) {
                        return t.replaceAll(Transliterator.#UPPER_TECH_LETER, "").replaceAll(Transliterator.#LOWER_TECH_LETER, "")
                    })(S), j.push(S), S = E(m), j.push(S)), !o)
                    if (b.includes(k)) {
                        const v = this;

                        function N(t) {
                            return t.replaceAll(v.transliterate(a), "").replaceAll(v.transliterate(l), "").replaceAll(v.transliterate(c), "").replaceAll(v.transliterate(u), "")
                        }
                        s.affectVowelNotConsonantWhenSofting && null != a && null != l && (S = N((S = this.transliterate(l + A)) + " " + S), j.push(S)), null != c && null != u && (w = N((w = this.transliterate(u + A)) + " " + w), j.push(w))
                    } else if (Object.keys(s.softableConsonantsDict).includes(k) && null != d && null != D) {
                    const F = this.transliterate(k + d) + " " + this.transliterate(A + D);
                    var w = F.replaceAll(y, "").replaceAll(C, "");
                    j.push(w)
                }
            }
            const B = t => null != t && t.length ? t[t.length - 1] : void 0;
            n[k + " " + A] = j.filter((t, e, i) => i.map(t => B(t.split(" ")).toLocaleUpperCase()).indexOf(B(t.split(" ")).toLocaleUpperCase()) === e).map(t => t.length && null != t.match(/\S.*/) ? t : "—").map(t => function(t) {
                const e = t.split(" ");
                if (2 === e.length) {
                    var i = e[0] === e[1],
                        o = 1 < Helpers.toDiacriticless(e[0]).length && e[0] === e[1].toLocaleUpperCase();
                    if (i || o) return e[1]
                }
                return t
            }(t)).join(", ")
        }
        const e = Object.values(n).join(", ");
        t = this.getTransliteratedAlphabet(!0).filter(t => !e.includes(t)).join(", ");
        return t.length && (n._others_ = t), n
    }
    getConfigSourceAlphabet(t, e) {
        return this.#config.getSourceAlphabet(t, e)
    }
    getTransliteratedAlphabet(o, t) {
        var e, i = this.#config;
        let s = [...Helpers.flatValuesAt(i.beforeStartDict, !1).map(t => this.transliterate(t))];
        for (const r of [...Helpers.flatValuesAt(i.dict, !1), ...Helpers.flatValuesAt(i.apostrophesSingleKeyDict, !1), ...Helpers.flatValuesAt(i.softableConsonantsDict, !1), ...Helpers.flatValuesAt(i.softingVowelsMultiDict, !1), ...Helpers.flatValuesAt(i.softingSignsMultiDict, !1), ...t ? Helpers.flatValuesAt(i.otherLanguagesLettersDict, !1) : []]) null != r && (e = [...Object.entries(i.afterFinishDict)].reduce((t, [e, i]) => t.replaceAll(e, i), r), s.push(e));
        s.push(...Helpers.flatValuesAt(i.afterFinishDict, !1));
        t = s.reduce((t, e) => {
            if (null == e) return t;
            let i = Helpers.toDiacriticless(e).length;
            if (1 === i && (!o || e === e.toLowerCase())) return [...t, e];
            if (1 < i)
                for (; i--;) t.push(o ? e.charAt(i).toLowerCase() : e.charAt(i));
            return t
        }, []);
        const n = [...new Set(t)];
        return n.sort(Config.alphabetOrderComparator)
    }
    #markStartingPositions(t) {
        var e = this.#config.getSourceAlphabet(!1, !0).concat([Transliterator.#UPPER_TECH_LETER, Transliterator.#LOWER_TECH_LETER]).join(""),
            i = new RegExp(`(?<a>^|[^${e}]+)(?<b>[${e}])`, "gu");
        let o = t.replaceAll(i, `$<a>${this.#WORD_START}$<b>`);
        return i = new RegExp(`(?<b>[${e}])(?<c>$|[^${e}]+)`, "gu"), o = o.replaceAll(i, `$<b>${this.#WORD_END}$<c>`), i = new RegExp(`(?<a>${this.#WORD_END})(?<b>['\`‘’])(?<c>${this.#WORD_START})`, "gu"), o = o.replaceAll(i, "$<b>"), o
    }
    #detectAndFixCapsLocked(t, e) {
        let i = t;
        e = e ?? 2;
        const o = {
                a: 1,
                b: 2,
                c: 3,
                q: 4,
                d: 5
            },
            s = [...i.matchAll(/(?<a>\p{Lu}\p{Ll}+)(?<b>\p{Lu}+)|(?<c>\p{Lu}+)(?<q>['"]*)(?<d>\p{Lu}\p{Ll}+)/gu)];
        var n, r, a, t = s.map(t => ({
            probablyIssue: null != t[o.a] ? t[o.a] : t[o.d],
            after: null != t[o.b] ? t[o.b] : "",
            before: null != t[o.c] ? t[o.c] : "",
            specSymb2: null != t[o.q] ? t[o.q] : "",
            index: t.index
        }));
        const l = this.#config.getDigraphs();
        for (const c of t) l.includes(c.probablyIssue.toLowerCase()) && (i = (n = i, r = c.index, a = c.before + c.specSymb2 + Helpers.toUpperCase(c.probablyIssue, this.#config.exceptionalCaseRules) + c.after, n.substr(0, r) + a + n.substr(r + a.length)));
        return 0 === e ? i : this.#detectAndFixCapsLocked(i, e - 1)
    }
    #replaceAllByDict(t, e, i) {
        var o, s, n = this.#useDiacritics ? 0 : 1;
        let r = t;
        for ([o, s] of Object.entries(e)) {
            var a = s[n];
            i && Array.isArray(a) && (r = r.replaceAll(this.#WORD_START + o, this.#WORD_START + Transliterator.#getPositionalValue(a, 0)), r = r.replaceAll(o + this.#WORD_END, Transliterator.#getPositionalValue(a, 2) + this.#WORD_END)), r = r.replaceAll(o, Transliterator.#getPositionalValue(a))
        }
        return r
    }
    #getSourceVowels(t) {
        const e = ["А", "а", "Â", "â", "E", "e", "I", "ı", "İ", "i", "O", "o", "Ö", "ö", "U", "u", "Ü", "ü"],
            i = this.#config.getSourceAlphabet(!1, t);
        return i.filter(t => e.includes(t))
    }
    #getSourceConsonants(t) {
        const e = ["B", "b", "C", "c", "Ç", "ç", "D", "d", "F", "f", "G", "g", "Ğ", "ğ", "H", "h", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "Ñ", "ñ", "P", "p", "Q", "q", "R", "r", "S", "s", "Ş", "ş", "T", "t", "V", "v", "Y", "y", "Z", "z"]
            i = this.#config.getSourceAlphabet(!1, t);
        return i.filter(t => e.includes(t))
    }
    #getSourceSpecialSigns(t) {
        const e = ["Ъ", "ъ", "Ь", "ь", "'", "’"],
            i = this.#config.getSourceAlphabet(!1, t);
        return i.filter(t => e.includes(t))
    }
    static #getPositionalValue(t, e) {
        return null == e && (e = 1), Array.isArray(t) ? t.length > e ? t[e] : t[t.length - 1] : t
    }
}
"undefined" == typeof window && (module.exports = Transliterator);