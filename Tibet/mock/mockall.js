module.exports = {
  rules: [
    {
      pattern: /\/Tibet\/api\/dataList.do\?page=0$/,
      respondwith: 'datalist0.json'
    },
    {
      pattern: /\/Tibet\/api\/dataList.do\?page=1$/,
      respondwith: 'datalist1.json'
    },
    {
      pattern: /\/Tibet\/api\/dataList.do\?page=$/,
      respondwith: 'datalist.json'
    },
    {
      pattern: /\/Tibet\/api\/find.php/,
      respondwith: 'find.json'
    },
    {
      pattern: /\/Tibet\/api\/angel.php/,
      respondwith: 'angel.json'
    },
    {
      pattern: /\/Tibet\/api\/banner.php/,
      respondwith: 'banner.json'
    },
    {
      pattern: /\/Tibet\/api\/first-taba.php/,
      respondwith: 'first-taba.json'
    },
    {
      pattern: /\/Tibet\/api\/first-taba-more.php/,
      respondwith: 'first-taba-more.json'
    },
    {
      pattern: /\/Tibet\/api\/first-taba-new.php/,
      respondwith: 'first-taba-new.json'
    },
    {
      pattern: /\/Tibet\/api\/search.php\?page=%E5%B8%83%E8%BE%BE%E6%8B%89%E5%AE%AB$/,
      respondwith: 'search-budala.json'
    },
    {
      pattern: /\/Tibet\/api\/search.php\?page=%E5%A4%A7%E6%98%AD%E5%AF%BA$/,
      respondwith: 'search-dazhaosi.json'
    },
    {
      pattern: /\/Tibet\/api\/search.php\?page=%E8%A5%BF%E8%97%8F$/,
      respondwith: 'search-xizang.json'
    },
    {
      pattern: /\/Tibet\/api\/search.php\?page=%E8%A5%BF%E5%8C%97$/,
      respondwith: 'search-xibei.json'
    },
    {
      pattern: /\/Tibet\/api\/search.php\?page=/,
      respondwith: 'search.json'
    }
  ]
}
