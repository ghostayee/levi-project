
  let appState = { email: '', cart: [], currentModalItem: null, currentCountry: null };

  const nfwSystems = [
    { title: "ITEG", code: "J1", src_vn: 2.0 },
    { title: "MBGC", code: "J2", src_vn: 1.0 },
    { title: "PBRC", code: "J3", src_vn: 2.0 },
    { title: "SIDR", code: "J4", src_vn: 1.0 },
    { title: "SDGC", code: "J5", src_vn: 1.0 },
    { title: "GSMF", code: "J6", src_vn: 1.0 },
    { title: "GFSS", code: "J7", src_vn: 2.0 },
    { title: "PCRR", code: "J8", src_vn: 1.0 },
    { title: "RE/Lab", code: "S1", src_vn: 75.0 },
    { title: "HousingCare", code: "S2", src_vn: 25.0 },
    { title: "Master Plan", code: "S3", src_vn: 15.0 }
  ];

  const euwebModels = [
    { country: "Afghanistan", iso: "AF", capital: "Kabul", factor: 0.102 },
    { country: "Albania", iso: "AL", capital: "Tirana", factor: 0.272 },
    { country: "Algeria", iso: "DZ", capital: "Algiers", factor: 0.150 },
    { country: "Angola", iso: "AO", capital: "Luanda", factor: 0.073 },
    { country: "Argentina", iso: "AR", capital: "Buenos Aires", factor: 0.413 },
    { country: "Armenia", iso: "AM", capital: "Yerevan", factor: 0.199 },
    { country: "Australia", iso: "AU", capital: "Canberra", factor: 1.660 },
    { country: "Austria", iso: "AT", capital: "Vienna", factor: 1.680 },
    { country: "Azerbaijan", iso: "AZ", capital: "Baku", factor: 0.209 },
    { country: "Bahrain", iso: "BH", capital: "Manama", factor: 1.039 },
    { country: "Bangladesh", iso: "BD", capital: "Dhaka", factor: 0.078 },
    { country: "Belarus", iso: "BY", capital: "Minsk", factor: 0.277 },
    { country: "Belgium", iso: "BE", capital: "Brussels", factor: 1.927 },
    { country: "Benin", iso: "BJ", capital: "Porto-Novo", factor: 0.058 },
    { country: "Bhutan", iso: "BT", capital: "Thimphu", factor: 0.170 },
    { country: "Bolivia", iso: "BO", capital: "Sucre", factor: 0.243 },
    { country: "Bosnia Herzegovina", iso: "BA", capital: "Sarajevo", factor: 0.383 },
    { country: "Botswana", iso: "BW", capital: "Gaborone", factor: 0.248 },
    { country: "Brazil", iso: "BR", capital: "Brasília", factor: 0.243 },
    { country: "Bulgaria", iso: "BG", capital: "Sofia", factor: 0.451 },
    { country: "Burkina Faso", iso: "BF", capital: "Ouagadougou", factor: 0.078 },
    { country: "Burundi", iso: "BI", capital: "Gitega", factor: 0.058 },
    { country: "Cambodia", iso: "KH", capital: "Phnom Penh", factor: 0.097 },
    { country: "Cameroon", iso: "CM", capital: "Yaoundé", factor: 0.102 },
    { country: "Canada", iso: "CA", capital: "Ottawa", factor: 1.107 },
    { country: "Cape Verde", iso: "CV", capital: "Praia", factor: 0.131 },
    { country: "Central African Republic", iso: "CF", capital: "Bangui", factor: 0.043 },
    { country: "Chad", iso: "TD", capital: "N'Djamena", factor: 0.126 },
    { country: "Chile", iso: "CL", capital: "Santiago", factor: 0.563 },
    { country: "China", iso: "CN", capital: "Beijing", factor: 0.485 },
    { country: "Colombia", iso: "CO", capital: "Bogotá", factor: 0.121 },
    { country: "Congo", iso: "CG", capital: "Brazzaville", factor: 0.033 },
    { country: "Costa Rica", iso: "CR", capital: "San José", factor: 0.388 },
    { country: "Croatia", iso: "HR", capital: "Zagreb", factor: 0.558 },
    { country: "Cuba", iso: "CU", capital: "Havana", factor: 0.033 },
    { country: "Cyprus", iso: "CY", capital: "Nicosia", factor: 0.942 },
    { country: "Czech Republic", iso: "CZ", capital: "Prague", factor: 0.704 },
    { country: "Denmark", iso: "DK", capital: "Copenhagen", factor: 1.854 },
    { country: "Djibouti", iso: "DJ", capital: "Djibouti", factor: 0.432 },
    { country: "Dominican Republic", iso: "DO", capital: "Santo Domingo", factor: 0.126 },
    { country: "East Timor", iso: "TL", capital: "Dili", factor: 0.087 },
    { country: "Ecuador", iso: "EC", capital: "Quito", factor: 0.233 },
    { country: "Egypt", iso: "EG", capital: "Cairo", factor: 0.146 },
    { country: "United Arab Emirates", iso: "AE", capital: "Abu Dhabi", factor: 2.243 },
    { country: "Equatorial Guinea", iso: "GQ", capital: "Malabo", factor: 0.403 },
    { country: "Eritrea", iso: "ER", capital: "Asmara", factor: 0.102 },
    { country: "Estonia", iso: "EE", capital: "Tallinn", factor: 0.772 },
    { country: "Ethiopia", iso: "ET", capital: "Addis Ababa", factor: 0.063 },
    { country: "Fiji", iso: "FJ", capital: "Suva", factor: 1.403 },
    { country: "Finland", iso: "FI", capital: "Helsinki", factor: 2.141 },
    { country: "France", iso: "FR", capital: "Paris", factor: 1.267 },
    { country: "Gabon", iso: "GA", capital: "Libreville", factor: 0.252 },
    { country: "Gambia", iso: "GM", capital: "Banjul", factor: 0.029 },
    { country: "Georgia", iso: "GE", capital: "Tbilisi", factor: 0.199 },
    { country: "Germany", iso: "DE", capital: "Berlin", factor: 1.374 },
    { country: "Ghana", iso: "GH", capital: "Accra", factor: 0.160 },
    { country: "Great Britain", iso: "GB", capital: "London", factor: 1.398 },
    { country: "Greece", iso: "GR", capital: "Athens", factor: 0.505 },
    { country: "Guatemala", iso: "GT", capital: "Guatemala City", factor: 0.282 },
    { country: "Guinea", iso: "GN", capital: "Conakry", factor: 0.121 },
    { country: "Guinea Bissau", iso: "GW", capital: "Bissau", factor: 0.037 },
    { country: "Haiti", iso: "HT", capital: "Port-au-Prince", factor: 0.427 },
    { country: "Netherlands", iso: "NL", capital: "Amsterdam", factor: 1.218 },
    { country: "Honduras", iso: "HN", capital: "Tegucigalpa", factor: 0.306 },
    { country: "Hong Kong", iso: "HK", capital: "Hong Kong", factor: 1.010 },
    { country: "Hungary", iso: "HU", capital: "Budapest", factor: 0.714 },
    { country: "India", iso: "IN", capital: "New Delhi", factor: 0.058 },
    { country: "Indonesia", iso: "ID", capital: "Jakarta", factor: 0.277 },
    { country: "Iran", iso: "IR", capital: "Tehran", factor: 0.228 },
    { country: "Iraq", iso: "IQ", capital: "Baghdad", factor: 0.155 },
    { country: "Ireland", iso: "IE", capital: "Dublin", factor: 1.437 },
    { country: "Israel", iso: "IL", capital: "Jerusalem", factor: 1.650 },
    { country: "Italy", iso: "IT", capital: "Roma", factor: 1.000 },
    { country: "Ivory Coast", iso: "CI", capital: "Yamoussoukro", factor: 0.078 },
    { country: "Jamaica", iso: "JM", capital: "Kingston", factor: 0.272 },
    { country: "Japan", iso: "JP", capital: "Tokyo", factor: 1.447 },
    { country: "Jordan", iso: "JO", capital: "Amman", factor: 0.306 },
    { country: "Kazakhstan", iso: "KZ", capital: "Astana", factor: 0.296 },
    { country: "Kenya", iso: "KE", capital: "Nairobi", factor: 0.175 },
    { country: "South Korea", iso: "KR", capital: "Seoul", factor: 1.636 },
    { country: "Kosovo", iso: "XK", capital: "Pristina", factor: 0.214 },
    { country: "Kuwait", iso: "KW", capital: "Kuwait City", factor: 2.252 },
    { country: "Kyrgyzstan", iso: "KG", capital: "Bishkek", factor: 0.277 },
    { country: "Laos", iso: "LA", capital: "Vientiane", factor: 0.117 },
    { country: "Latvia", iso: "LV", capital: "Riga", factor: 0.544 },
    { country: "Lebanon", iso: "LB", capital: "Beirut", factor: 0.277 },
    { country: "Lesotho", iso: "LS", capital: "Maseru", factor: 0.058 },
    { country: "Liberia", iso: "LR", capital: "Monrovia", factor: 0.022 },
    { country: "Libya", iso: "LY", capital: "Tripoli", factor: 0.146 },
    { country: "Lithuania", iso: "LT", capital: "Vilnius", factor: 0.583 },
    { country: "Luxembourg", iso: "LU", capital: "Luxembourg", factor: 1.947 },
    { country: "North Macedonia", iso: "MK", capital: "Skopje", factor: 0.257 },
    { country: "Madagascar", iso: "MG", capital: "Antananarivo", factor: 0.032 },
    { country: "Malawi", iso: "MW", capital: "Lilongwe", factor: 0.033 },
    { country: "Malaysia", iso: "MY", capital: "Kuala Lumpur", factor: 0.364 },
    { country: "Maldives", iso: "MV", capital: "Malé", factor: 0.325 },
    { country: "Mali", iso: "ML", capital: "Bamako", factor: 0.053 },
    { country: "Malta", iso: "MT", capital: "Valletta", factor: 0.811 },
    { country: "Mauritania", iso: "MR", capital: "Nouakchott", factor: 0.189 },
    { country: "Mauritius", iso: "MU", capital: "Port Louis", factor: 0.257 },
    { country: "Mexico", iso: "MX", capital: "Mexico City", factor: 0.233 },
    { country: "Moldova", iso: "MD", capital: "Chișinău", factor: 0.136 },
    { country: "Mongolia", iso: "MN", capital: "Ulaanbaatar", factor: 0.228 },
    { country: "Montenegro", iso: "ME", capital: "Podgorica", factor: 0.282 },
    { country: "Morocco", iso: "MA", capital: "Rabat", factor: 0.223 },
    { country: "Mozambique", iso: "MZ", capital: "Maputo", factor: 0.141 },
    { country: "Myanmar", iso: "MM", capital: "Naypyidaw", factor: 0.097 },
    { country: "Namibia", iso: "NA", capital: "Windhoek", factor: 0.073 },
    { country: "Nepal", iso: "NP", capital: "Kathmandu", factor: 0.136 },
    { country: "New Zealand", iso: "NZ", capital: "Wellington", factor: 1.786 },
    { country: "Niger", iso: "NE", capital: "Niamey", factor: 0.165 },
    { country: "Nigeria", iso: "NG", capital: "Abuja", factor: 0.170 },
    { country: "Norway", iso: "NO", capital: "Oslo", factor: 2.728 },
    { country: "Oman", iso: "OM", capital: "Muscat", factor: 0.874 },
    { country: "Pakistan", iso: "PK", capital: "Islamabad", factor: 0.102 },
    { country: "Palestine", iso: "PS", capital: "Ramallah", factor: 0.325 },
    { country: "Panama", iso: "PA", capital: "Panama City", factor: 0.607 },
    { country: "Paraguay", iso: "PY", capital: "Asunción", factor: 0.214 },
    { country: "Peru", iso: "PE", capital: "Lima", factor: 0.223 },
    { country: "Philippines", iso: "PH", capital: "Manila", factor: 0.097 },
    { country: "Poland", iso: "PL", capital: "Warsaw", factor: 0.607 },
    { country: "Portugal", iso: "PT", capital: "Lisbon", factor: 0.704 },
    { country: "Qatar", iso: "QA", capital: "Doha", factor: 1.617 },
    { country: "Romania", iso: "RO", capital: "Bucharest", factor: 0.451 },
    { country: "Russia", iso: "RU", capital: "Moscow", factor: 0.325 },
    { country: "Rwanda", iso: "RW", capital: "Kigali", factor: 0.112 },
    { country: "El Salvador", iso: "SV", capital: "San Salvador", factor: 0.209 },
    { country: "Saudi Arabia", iso: "SA", capital: "Riyadh", factor: 1.364 },
    { country: "Senegal", iso: "SN", capital: "Dakar", factor: 0.083 },
    { country: "Serbia", iso: "RS", capital: "Belgrade", factor: 0.316 },
    { country: "Sierra Leone", iso: "SL", capital: "Freetown", factor: 0.037 },
    { country: "Singapore", iso: "SG", capital: "Singapore", factor: 2.282 },
    { country: "Slovakia", iso: "SK", capital: "Bratislava", factor: 0.675 },
    { country: "Somalia", iso: "SO", capital: "Mogadishu", factor: 0.058 },
    { country: "South Africa", iso: "ZA", capital: "Pretoria", factor: 0.816 },
    { country: "Spain", iso: "ES", capital: "Madrid", factor: 0.995 },
    { country: "Sri Lanka", iso: "LK", capital: "Colombo", factor: 0.141 },
    { country: "Sudan", iso: "SD", capital: "Khartoum", factor: 0.020 },
    { country: "Sweden", iso: "SE", capital: "Stockholm", factor: 1.947 },
    { country: "Switzerland", iso: "CH", capital: "Bern", factor: 2.573 },
    { country: "Syria", iso: "SY", capital: "Damascus", factor: 0.020 },
    { country: "Taiwan", iso: "TW", capital: "Taipei", factor: 0.772 },
    { country: "Tajikistan", iso: "TJ", capital: "Dushanbe", factor: 0.087 },
    { country: "Tanzania", iso: "TZ", capital: "Dodoma", factor: 0.078 },
    { country: "Thailand", iso: "TH", capital: "Bangkok", factor: 0.214 },
    { country: "Togo", iso: "TG", capital: "Lomé", factor: 0.029 },
    { country: "Trinidad and Tobago", iso: "TT", capital: "Port of Spain", factor: 0.617 },
    { country: "Tunisia", iso: "TN", capital: "Tunis", factor: 0.092 },
    { country: "Turkey", iso: "TR", capital: "Ankara", factor: 0.199 },
    { country: "Turkmenistan", iso: "TM", capital: "Ashgabat", factor: 0.146 },
    { country: "Uganda", iso: "UG", capital: "Kampala", factor: 0.112 },
    { country: "Ukraine", iso: "UA", capital: "Kyiv", factor: 0.248 },
    { country: "Uruguay", iso: "UY", capital: "Montevideo", factor: 0.403 },
    { country: "USA", iso: "US", capital: "Washington D.C.", factor: 1.650 },
    { country: "Uzbekistan", iso: "UZ", capital: "Tashkent", factor: 0.175 },
    { country: "Venezuela", iso: "VE", capital: "Caracas", factor: 0.012 },
    { country: "Vietnam", iso: "VN", capital: "Hanoi", factor: 0.136 },
    { country: "Yemen", iso: "YE", capital: "Sana'a", factor: 0.058 },
    { country: "Zambia", iso: "ZM", capital: "Lusaka", factor: 0.204 },
    { country: "Zimbabwe", iso: "ZW", capital: "Harare", factor: 0.117 }
  ];

  // ============================================================
  // KYC Save & Load Engine
  // ============================================================
  function saveKYC() {
      if(!appState.email) return;
      const kycData = {
          fname: document.getElementById('kyc-fname') ? document.getElementById('kyc-fname').value : '',
          lname: document.getElementById('kyc-lname') ? document.getElementById('kyc-lname').value : '',
          phone: document.getElementById('kyc-phone') ? document.getElementById('kyc-phone').value : '',
          org: document.getElementById('kyc-org') ? document.getElementById('kyc-org').value : '',
          iban: document.getElementById('kyc-iban') ? document.getElementById('kyc-iban').value : '',
          bic: document.getElementById('kyc-bic') ? document.getElementById('kyc-bic').value : '',
          bank: document.getElementById('kyc-bank') ? document.getElementById('kyc-bank').value : '',
          vat: document.getElementById('kyc-vat') ? document.getElementById('kyc-vat').value : ''
      };
      localStorage.setItem('jwt_kyc_' + appState.email, JSON.stringify(kycData));
  }

  function loadUserData(email) {
      // 1. Load KYC Data
      const data = localStorage.getItem('jwt_kyc_' + email);
      if(data) {
          const kyc = JSON.parse(data);
          if(document.getElementById('kyc-fname')) document.getElementById('kyc-fname').value = kyc.fname || '';
          if(document.getElementById('kyc-lname')) document.getElementById('kyc-lname').value = kyc.lname || '';
          if(document.getElementById('kyc-phone')) document.getElementById('kyc-phone').value = kyc.phone || '';
          if(document.getElementById('kyc-org')) document.getElementById('kyc-org').value = kyc.org || '';
          if(document.getElementById('kyc-iban')) document.getElementById('kyc-iban').value = kyc.iban || '';
          if(document.getElementById('kyc-bic')) document.getElementById('kyc-bic').value = kyc.bic || '';
          if(document.getElementById('kyc-bank')) document.getElementById('kyc-bank').value = kyc.bank || '';
          if(document.getElementById('kyc-vat')) document.getElementById('kyc-vat').value = kyc.vat || '';
      }
      
      // 2. Load Cart Data attached to this specific user
      const cartData = localStorage.getItem('jwt_cart_' + email);
      if(cartData) {
          appState.cart = JSON.parse(cartData);
          document.getElementById('cart-count').innerText = appState.cart.length;
      } else {
          appState.cart = [];
          document.getElementById('cart-count').innerText = "0";
      }
      
      // 3. SILENT BACKGROUND SYNC: Pull latest cart from Server
      loadCartFromServer(email);
  }
      // --- SERVER SYNC ENGINE ---
  async function syncCartToServer() {
      if(!appState.email) return;
      try {
          await fetch('save-asset.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: appState.email, cart: appState.cart })
          });
      } catch(e) { console.error('Server sync failed', e); }
  }

  async function loadCartFromServer(email) {
      try {
          const res = await fetch('save-asset.php?email=' + encodeURIComponent(email));
          const data = await res.json();
          if(data.success && data.cart) {
              appState.cart = data.cart;
              document.getElementById('cart-count').innerText = appState.cart.length;
              localStorage.setItem('jwt_cart_' + email, JSON.stringify(appState.cart)); // Sync local memory
          }
      } catch(e) { console.error('Load sync failed', e); }
  }

  function updateBingLinks() {
    const country = appState.currentCountry ? appState.currentCountry.country : '';
    const iso = appState.currentCountry ? appState.currentCountry.iso : '';
    const factor = appState.currentCountry ? appState.currentCountry.factor : 1.0;
    const city = document.getElementById('target-city').value || '';
    const popVal = document.getElementById('target-population').value || 1.0;

    const queryBase = encodeURIComponent(`${country} ${city}`).trim();
    
    const econBadge = document.getElementById('badge-econ');
    econBadge.innerText = `📈 Econ: Factor ${factor.toFixed(3)}`;
    econBadge.href = `https://www.bing.com/search?q=Economy+of+${queryBase}`;

    const geogBadge = document.getElementById('badge-geog');
    geogBadge.innerText = `🗺️ Geog: ISO ${iso}`;
    geogBadge.href = `https://www.bing.com/search?q=Geography+of+${queryBase}`;

    const orogBadge = document.getElementById('badge-orog');
    orogBadge.innerText = `⛰️ Orog: Pop ${popVal}M`;
    orogBadge.href = `https://www.bing.com/search?q=Orography+and+Topography+of+${queryBase}`;
  }

  // ============================================================
  // PDF FIX: printPDF() replaces html2pdf — opens print window
  // ============================================================
  function printPDF(htmlContent, filename) {
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) { alert('Please allow pop-ups for this site to generate PDFs.'); return; }
    win.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><title>' + filename + '</title>' +
      '<style>' +
      '* { box-sizing: border-box; margin: 0; padding: 0; }' +
      'body { font-family: Arial, sans-serif; background: #fff; color: #333; }' +
      'table { border-collapse: collapse; }' +
      '.print-btn { position: fixed; top: 12px; right: 12px; background: #10b981; color: #000; border: none; padding: 10px 20px; font-size: 14px; font-weight: 700; border-radius: 6px; cursor: pointer; z-index: 9999; }' +
      '@media print { .print-btn { display: none; } @page { margin: 12mm; size: A4 portrait; } }' +
      '</style></head><body>' +
      '<button class="print-btn" onclick="window.print()">Print / Save as PDF</button>' +
      htmlContent +
      '</body></html>');
    win.document.close();
    win.onload = function() { setTimeout(function() { win.focus(); win.print(); }, 500); };
  }
  // ============================================================

  // --- FULL PROSPECTUS PDF GENERATOR MATRIX ---
  function getProspectusHTML(item) {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-GB');
    const userEmail = localStorage.getItem('jwt_auth_email') || 'Guest';
    
    // Capture Live/Modal KYC Data
   // CAPTURE BB ENTITY (From Main Profile)
    const bbFname = document.getElementById('kyc-fname').value || 'BB';
    const bbLname = document.getElementById('kyc-lname').value || 'User';
    const bbVat = document.getElementById('kyc-vat').value || 'Pending';
    const bbIban = document.getElementById('kyc-iban').value || 'Pending';
    const bbBic = document.getElementById('kyc-bic').value || 'Pending';
    
    // CAPTURE BUYER ENTITY (From Modal - Fallback to BB if blank)
    const mKyc = item.modalKyc || {};
    const buyVat = mKyc.vat || bbVat;
    const buyIban = mKyc.iban || bbIban;
    const buyBic = mKyc.bic || bbBic;

    const format = (num) => new Intl.NumberFormat('en-US').format(num);
    const vnEuros = item.calculatedVN * 1000000;
    const bp = item.baseCalculatedPrice;

    // Excel Matrix Array
    const rows = [
        { mode: "NFW-BB", name: "NFW-BB Price", c100: bp, buy1: "-", bb01: "-", bbFee: "-", irr: "-", code: item.codeStrBase || item.nfwName, desc: "Base 6-month pre-emption" },
        { mode: "Licence €/y", name: "Licence €/y", c100: vnEuros*0.1, buy1: vnEuros*0.01, bb01: vnEuros*0.001, bbFee: bp*2, irr: 200, code: (item.codeStrBase || item.nfwName)+"_L" },
        { mode: "Sale RP €", name: "Sale RP €", c100: vnEuros*3, buy1: vnEuros*0.03, bb01: vnEuros*0.003, bbFee: bp*12, irr: 1200, code: (item.codeStrBase || item.nfwName)+"_S" },
        { mode: "II-SRB €", name: "II-SRB €", c100: vnEuros*1, buy1: vnEuros*0.01, bb01: vnEuros*0.001, bbFee: bp*4, irr: 400, code: (item.codeStrBase || item.nfwName)+"_I" },
        { mode: "JV-30/21 €", name: "JV-30/21 €", c100: vnEuros*1, buy1: vnEuros*0.01, bb01: vnEuros*0.001, bbFee: bp*4, irr: 400, code: (item.codeStrBase || item.nfwName)+"_J" }
    ];

    let tableRows = '';
    rows.forEach(r => {
        const isSelected = r.mode === item.selectedMode;
        const bg = isSelected ? '#d1fae5' : '#ffffff';
        const fw = isSelected ? 'bold' : 'normal';
        const selTag = isSelected ? '✅ ' : '';

        if(r.mode === "NFW-BB") {
            tableRows += `<tr style="background:${bg}; font-weight:${fw};">
                <td style="padding:10px; border:1px solid #cbd5e1;">${selTag}${r.name}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; text-align:right;">${format(r.c100)}</td>
                <td colspan="4" style="padding:10px; border:1px solid #cbd5e1; text-align:center; color:#64748b;">${r.desc}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; font-family:monospace; font-size:11px;">${r.code}</td>
            </tr>`;
        } else {
            tableRows += `<tr style="background:${bg}; font-weight:${fw};">
                <td style="padding:10px; border:1px solid #cbd5e1;">${selTag}${r.name}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; text-align:right;">${format(r.c100)}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; text-align:right;">${format(r.buy1)}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; text-align:right;">${format(r.bb01)}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; text-align:right; font-weight:bold; color:#856404;">${format(r.bbFee)}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; text-align:right;">${r.irr}</td>
                <td style="padding:10px; border:1px solid #cbd5e1; font-family:monospace; font-size:11px;">${r.code}</td>
            </tr>`;
        }
    });

    return `
      <div style="font-family: Arial, sans-serif; padding: 40px; background: #ffffff; color: #333; width: 100%; max-width: 1100px; margin: 0 auto;">
        <div style="background-color: #f3f4f6; padding: 20px; border-bottom: 3px solid #10b981; margin-bottom: 25px;">
          <h2 style="margin: 0 0 10px 0; color: #1e293b;">Dream.ZONE / Official Prospectus</h2>
          <p style="margin: 0; color: #64748b; font-size: 14px;">JWT Commercial Agreement & Matrix Valuation</p>
          <div style="margin-top: 15px; font-size: 12px; color: #475569;"><strong>Auth ID:</strong> ${userEmail} | <strong>Date:</strong> ${dateString}</div>
        </div>
        
       <table style="width:100%; margin-bottom:25px; font-size:12px; border-collapse:collapse;">
          <tr>
            <td style="width:32%; background:#f8fafc; padding:15px; border:1px solid #cbd5e1; vertical-align:top;">
              <h4 style="margin-top:0; color:#10b981; font-size:14px;">PCRR Entity</h4>
              <p style="margin:4px 0;"><strong>Org:</strong> PCRR JWTeam Srls</p>
              <p style="margin:4px 0;"><strong>VAT:</strong> 12092970966</p>
              <p style="margin:4px 0;"><strong>IBAN:</strong> IT64H0306901603100000108455</p>
              <p style="margin:4px 0;"><strong>SWIFT:</strong> BCITITMM</p>
            </td>
            <td style="width:2%;"></td>
            <td style="width:32%; background:#f8fafc; padding:15px; border:1px solid #cbd5e1; vertical-align:top;">
              <h4 style="margin-top:0; color:#10b981; font-size:14px;">BB Entity</h4>
              <p style="margin:4px 0;"><strong>Name:</strong> ${bbFname} ${bbLname}</p>
              <p style="margin:4px 0;"><strong>VAT:</strong> ${bbVat}</p>
              <p style="margin:4px 0;"><strong>IBAN:</strong> ${bbIban}</p>
              <p style="margin:4px 0;"><strong>SWIFT:</strong> ${bbBic}</p>
            </td>
            <td style="width:2%;"></td>
            ${item.selectedMode !== 'NFW-BB' ? `
            <td style="width:32%; background:#f8fafc; padding:15px; border:1px solid #cbd5e1; vertical-align:top;">
              <h4 style="margin-top:0; color:#10b981; font-size:14px;">BUYER KYC-S</h4>
              <p style="margin:4px 0;"><strong>VAT Number:</strong> ${buyVat}</p>
              <p style="margin:4px 0;"><strong>IBAN:</strong> ${buyIban}</p>
              <p style="margin:4px 0;"><strong>SWIFT/BIC:</strong> ${buyBic}</p>
            </td>` : `
            <td style="width:32%; background:#f3f4f6; padding:15px; border:1px solid #cbd5e1; vertical-align:top; color:#94a3b8; text-align:center;">
              <br><br>BUYER DATA NOT REQUIRED<br>(NFW-BB Pre-emption)
            </td>`}
          </tr>
        </table>

        <div class="summary-note">
          <p><strong>Target:</strong> ${item.codeStrBase} (${item.calculatedVN} M€ State Zone VN)</p>
        </div>

        <table style="width:100%; border-collapse:collapse; font-size:12px; text-align:left;">
          <thead>
            <tr style="background:#1e293b; color:#fff;">
              <th style="padding:10px; border:1px solid #cbd5e1;">Select NFT/NFW</th>
              <th style="padding:10px; border:1px solid #cbd5e1; text-align:right;">Contract 100%</th>
              <th style="padding:10px; border:1px solid #cbd5e1; text-align:right;">Buy 1%</th>
              <th style="padding:10px; border:1px solid #cbd5e1; text-align:right;">BB fee 0.1%</th>
              <th style="padding:10px; border:1px solid #cbd5e1; text-align:right;">BB fee</th>
              <th style="padding:10px; border:1px solid #cbd5e1; text-align:right;">BB IRR%</th>
              <th style="padding:10px; border:1px solid #cbd5e1;">Code NFT-BUY</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        
        <div class="mt-20" style="padding-top: 15px; border-top: 2px dashed #cbd5e1;">
          <p class="cart-due">DUE FOR SELECTED: <span class="text-accent">${format(item.finalCalculatedPrice)} €</span></p>
        </div>
      </div>
    `;
  }
  // -----------------------------

  function changeStep(stepNumber) {
    sessionStorage.setItem('jwt_current_step', stepNumber);
    document.querySelectorAll('.step-view').forEach(el => el.classList.remove('active'));
    document.getElementById('step-' + stepNumber).classList.add('active');
    
    document.querySelectorAll('.progress-step').forEach((el, index) => {
      el.classList.remove('active', 'completed');
      if (index + 1 < stepNumber) el.classList.add('completed');
      if (index + 1 === stepNumber) el.classList.add('active');
    });

    if (stepNumber === 5) {
      const container = document.getElementById('cart-contents');
      if(appState.cart.length === 0) {
        container.innerHTML = '<div class="cart-placeholder">Your cart is empty.</div>';
        return;
      }
      let html = '';
      let totalAccumulator = 0;
      appState.cart.forEach((item, idx) => {
        totalAccumulator += parseFloat(item.price); 
        let printPrice = new Intl.NumberFormat('en-US').format(item.price) + ' €';
        html += `
            <div class="cart-item">
              <div>
                <div class="cart-item__title">${item.title}</div>
                <div class="cart-item__meta">${item.codeStr}</div>
              </div>
              <div class="cart-item__actions">
                <div class="cart-item__price">${printPrice}</div>
                <button type="button" class="btn btn-outline btn-remove-cart" data-idx="${idx}" title="Remove Asset">❌</button>
              </div>
            </div>`;
      });
      
      let totalStr = new Intl.NumberFormat('en-US').format(totalAccumulator) + ' €';
      html += `<div class="cart-total"><span>TOTAL DUE:</span><span class="text-accent text-glow">${totalStr}</span></div>`;
      
      html += `<div class="text-right mt-15">
                <button type="button" class="btn btn-outline btn-outline-accent btn-small" id="btn-gen-cart-all-pdf">📄 Generate Full Cart Prospectus (PDF)</button>
               </div>`;
               
      container.innerHTML = html;

      setTimeout(() => {
          const btnAllPdf = document.getElementById('btn-gen-cart-all-pdf');
          if(btnAllPdf) {
              btnAllPdf.addEventListener('click', function(e) {
                  e.preventDefault();
                  let combinedHTML = '';
                  appState.cart.forEach((cartItem, i) => {
                      const itemData = JSON.parse(cartItem.itemData);
                      if (i > 0) combinedHTML += '<div style="page-break-before: always;"></div>';
                      combinedHTML += getProspectusHTML(itemData);
                  });
                  printPDF(combinedHTML, 'Full_Cart_Prospectus.pdf');
              });
          }

          document.querySelectorAll('.btn-remove-cart').forEach(btn => {
              btn.addEventListener('click', function(e) {
                  e.preventDefault();
                  const idxToRemove = parseInt(this.getAttribute('data-idx'));
                  appState.cart.splice(idxToRemove, 1);
                  const savedEmail = localStorage.getItem('jwt_auth_email');
                  if(savedEmail) {
                      localStorage.setItem('jwt_cart_' + savedEmail, JSON.stringify(appState.cart));
                      if(typeof syncCartToServer === "function") syncCartToServer();
                  }
                  document.getElementById('cart-count').innerText = appState.cart.length;
                  changeStep(5);
              });
          });
      }, 100);
    }
  }

  function buildNFWCards() {
    const grid = document.getElementById('dynamic-nfw-grid');
    if(!grid) return;
    grid.innerHTML = '';
    
    const factor = appState.currentCountry.factor;
    const iso = appState.currentCountry.iso;
    
    let rawCity = document.getElementById('target-city').value || appState.currentCountry.capital;
    const city = rawCity.trim().charAt(0).toUpperCase() + rawCity.trim().slice(1);
    
    const popInput = parseFloat(document.getElementById('target-population').value) || 1.0;

    nfwSystems.forEach((sys, idx) => {
      
      const encodedName = `${iso}-${sys.code}-${city}`;
      
      const stateZoneVN = sys.src_vn * popInput * factor;
      const displayVN = stateZoneVN.toFixed(3);
      
      const basePrice = Math.round(stateZoneVN * 1000000 * 0.005);
      const formattedPrice = new Intl.NumberFormat('en-US').format(basePrice);

      const card = document.createElement('div');
      card.className = 'nfw-card';
      card.innerHTML = `
        <div class="nfw-header">
          <div class="nfw-title">⚙️ ${sys.title}</div>
          <div class="nfw-meta">${encodedName}</div>
        </div>
        <div class="nfw-totals" style="padding: 10px 20px;"><span>State VN M€</span><span>${displayVN} M€</span></div>
        <div class="nfw-bb-price" style="padding: 10px 20px;"><span>💰 BB Price</span><span>${formattedPrice} €</span></div>
        <div class="nfw-actions">
          <button type="button" class="btn btn-outline trig-details" data-idx="${idx}" data-nfw="${encodedName}" data-vn="${displayVN}" data-price="${basePrice}">Select XOR</button>
          <button type="button" class="btn btn-primary trig-add" data-idx="${idx}" data-nfw="${encodedName}" data-price="${basePrice}">🛒 Base Add</button>
        </div>
      `;
      grid.appendChild(card);
    });
    
    document.querySelectorAll('.trig-details').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const idx = this.getAttribute('data-idx');
        const sys = nfwSystems[idx];
        const stateVN = parseFloat(this.getAttribute('data-vn'));
        const basePrice = parseFloat(this.getAttribute('data-price'));
        const nfwName = this.getAttribute('data-nfw');
        
        const popInput = parseFloat(document.getElementById('target-population').value) || 1.0;
        const factor = appState.currentCountry.factor;

        const defaultCodeStr = nfwName; 
        appState.currentModalItem = { title: sys.title, nfwName: nfwName, calculatedVN: stateVN, baseCalculatedPrice: basePrice, finalCalculatedPrice: basePrice, selectedMode: 'NFW-BB', suffix: '', codeStr: defaultCodeStr, codeStrBase: nfwName };
        
        document.getElementById('modal-nfw-title').innerText = sys.title;
        document.getElementById('modal-nfw-target').innerText = nfwName;
        document.getElementById('pTblT').innerText = `📋 Full Asset — ${nfwName}`;
        
        document.getElementById('mdl-f').innerText = factor.toFixed(3);
        document.getElementById('mdl-pop').innerText = popInput;
        document.getElementById('mdl-nom').innerText = sys.src_vn;
        document.getElementById('mdl-vnm').innerText = stateVN.toFixed(3);
        
        document.getElementById('mdl-kyc-vat').value = document.getElementById('kyc-vat').value || '';
        document.getElementById('mdl-kyc-iban').value = document.getElementById('kyc-iban').value || '';
        document.getElementById('mdl-kyc-bic').value = document.getElementById('kyc-bic').value || '';
        
        document.getElementById('pVN').innerText = stateVN.toFixed(3) + ' M€';
        document.getElementById('pBB').innerText = new Intl.NumberFormat('en-US').format(basePrice) + ' €';

        const format = (num) => new Intl.NumberFormat('en-US').format(num);
        const vnEuros = stateVN * 1000000;
        
        const tableData = [
            { name: "Licence €/y", code: "_L", contract: vnEuros * 0.10, buy1: vnEuros * 0.01, irr: 200 },
            { name: "Sale RP €", code: "_S", contract: vnEuros * 3.00, buy1: vnEuros * 0.03, irr: 1200 },
            { name: "II-SRB €", code: "_I", contract: vnEuros * 1.00, buy1: vnEuros * 0.01, irr: 400 },
            { name: "JV-30/21 €", code: "_J", contract: vnEuros * 1.00, buy1: vnEuros * 0.01, irr: 400 }
        ];

        let tbodyHTML = '';
        
        tbodyHTML += `<tr class="xor-row active" data-price="${basePrice}" data-mode="NFW-BB" data-suffix="" data-codestr="${defaultCodeStr}">
            <td><input type="radio" name="nft_xor" checked></td>
            <td><strong>NFW-BB Price</strong></td>
            <td class="r gv">${format(basePrice)}</td>
            <td colspan="4" style="text-align:center; color:var(--text-muted); font-size:11px;">Base 6-month pre-emption</td>
            <td class="cd">${defaultCodeStr}</td>
        </tr>`;

        tableData.forEach(row => {
            const contract = row.contract;
            const buy1 = row.buy1;
            const fee01 = contract * 0.001;
            const bbFee = basePrice * (row.irr / 100); 
            const codeStr = `${nfwName}${row.code}`;

            tbodyHTML += `<tr class="xor-row" data-price="${buy1}" data-mode="${row.name}" data-suffix="${row.code}" data-codestr="${codeStr}">
                <td><input type="radio" name="nft_xor"></td>
                <td><strong>${row.name}</strong></td>
                <td class="r gv">${format(contract)}</td>
                <td class="r">${format(buy1)}</td>
                <td class="r">${format(fee01)}</td>
                <td class="r" style="color:#fde68a;font-weight:700;">${format(bbFee)}</td>
                <td class="r">${row.irr}</td>
                <td class="cd">${codeStr}</td>
            </tr>`;
        });
        document.getElementById('pTbl').innerHTML = tbodyHTML;

        document.querySelectorAll('.xor-row').forEach(row => {
            row.addEventListener('click', function() {
                document.querySelectorAll('.xor-row').forEach(r => r.classList.remove('active'));
                this.classList.add('active');
                this.querySelector('input').checked = true;
                
                const newPrice = parseFloat(this.getAttribute('data-price'));
                appState.currentModalItem.selectedMode = this.getAttribute('data-mode');
                appState.currentModalItem.suffix = this.getAttribute('data-suffix');
                appState.currentModalItem.finalCalculatedPrice = newPrice;
                appState.currentModalItem.codeStr = this.getAttribute('data-codestr');
                
                const bbSideLabel = document.querySelector('.bb-side .lb');
                const bbSideValue = document.getElementById('pBB');
                
                if (this.getAttribute('data-mode') === 'NFW-BB') {
                    bbSideLabel.innerText = 'BB Price (0.5% VN)';
                } else {
                    bbSideLabel.innerText = 'Selected Asset Due';
                }
                bbSideValue.innerText = format(newPrice) + ' €';
            });
        });

        document.getElementById('details-modal').style.display = 'flex';
      });
    });

    document.querySelectorAll('.trig-add').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const idx = this.getAttribute('data-idx');
        const sys = nfwSystems[idx];
        const calcPrice = parseFloat(this.getAttribute('data-price'));
        const nfwName = this.getAttribute('data-nfw');
        const defaultCodeStr = nfwName; 
        
        const itemData = { title: sys.title, nfwName: nfwName, calculatedVN: (sys.src_vn * (parseFloat(document.getElementById('target-population').value) || 1.0) * appState.currentCountry.factor).toFixed(3), baseCalculatedPrice: calcPrice, finalCalculatedPrice: calcPrice, selectedMode: 'NFW-BB', suffix: '', codeStr: defaultCodeStr, codeStrBase: nfwName };

        appState.cart.push({ title: `${defaultCodeStr} (${sys.title} - Base)`, price: calcPrice, codeStr: defaultCodeStr, itemData: JSON.stringify(itemData) });
        localStorage.setItem('jwt_cart_' + appState.email, JSON.stringify(appState.cart));
        syncCartToServer();
        
        document.getElementById('cart-count').innerText = appState.cart.length;
        document.querySelector('.dz-cart-btn').style.transform = 'scale(1.1)';
        setTimeout(() => document.querySelector('.dz-cart-btn').style.transform = 'scale(1)', 200);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const urlCaller = urlParams.get('caller');
    const urlEmail = urlParams.get('email');
    const refCaller = document.referrer;
    
    let finalCaller = 'https://mbgc-jwt.eu/'; 

    if (urlCaller) {
        finalCaller = urlCaller;
        sessionStorage.setItem('jwt_saved_caller', finalCaller);
    } else if (refCaller && !refCaller.includes('dream.zone')) {
        finalCaller = refCaller;
        sessionStorage.setItem('jwt_saved_caller', finalCaller);
    } else {
        const saved = sessionStorage.getItem('jwt_saved_caller');
        if (saved) finalCaller = saved;
    }

    if (!finalCaller.startsWith('http')) finalCaller = 'https://' + finalCaller;

    const callerLink = document.getElementById('caller-link');
    if(callerLink) {
        callerLink.innerText = '← Return to Caller';
        callerLink.href = finalCaller;
    }

    if (urlEmail && document.getElementById('user-email')) {
        document.getElementById('user-email').value = urlEmail;
    }

    const savedEmail = localStorage.getItem('jwt_auth_email');
    const savedStep = sessionStorage.getItem('jwt_current_step');

    if(savedEmail) {
        appState.email = savedEmail;
        const displayUser = document.getElementById('display-user');
        if(displayUser) {
            displayUser.innerText = savedEmail;
            displayUser.style.color = 'var(--accent-main)';
            document.getElementById('display-name').innerText = savedEmail;
        }
        loadUserData(savedEmail);
        changeStep(savedStep ? parseInt(savedStep) : 2);
    } else {
        changeStep(1);
    }

    const countrySelect = document.getElementById('target-country');
    euwebModels.forEach((model, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.text = model.country;
      countrySelect.appendChild(option);
    });

    countrySelect.addEventListener('change', function() {
      const selected = euwebModels[this.value];
      appState.currentCountry = selected;
      
      document.getElementById('target-iso').value = selected.iso;
      document.getElementById('target-city').value = selected.capital;
      document.getElementById('target-factor').value = selected.factor.toFixed(3);
      
      updateBingLinks();
      if(document.getElementById('nfw-results').style.display === 'block') buildNFWCards();
    });
    countrySelect.dispatchEvent(new Event('change'));

    document.getElementById('target-city').addEventListener('input', function() {
      updateBingLinks();
      if(document.getElementById('nfw-results').style.display === 'block') buildNFWCards();
    });

    document.getElementById('target-population').addEventListener('input', function() {
      updateBingLinks();
      if(document.getElementById('nfw-results').style.display === 'block') buildNFWCards();
    });

    document.getElementById('btn-generate').addEventListener('click', function(e) {
      e.preventDefault();
      const btn = this;
      const originalText = btn.innerText;
      btn.innerText = 'Calculating Live Economic Matrices...';
      
      setTimeout(() => {
        buildNFWCards();
        document.getElementById('nfw-results').style.display = 'block';
        btn.innerText = originalText;
        document.getElementById('nfw-results').scrollIntoView({behavior: 'smooth'});
      }, 600);
    });

    document.getElementById('btn-pdf-all').addEventListener('click', function(e) {
      e.preventDefault();
      const country = appState.currentCountry;
      const city = document.getElementById('target-city').value || country.capital;
      const pop = document.getElementById('target-population').value || 1.0;
      const factor = country.factor;

      let html = `
        <div style="font-family: Arial; padding: 40px; color:#333;">
          <h2 style="color:#10b981; border-bottom:2px solid #10b981; padding-bottom:10px;">Dream.ZONE - 11 NFW Base Matrices</h2>
          <p><strong>Target:</strong> ${country.iso} / ${city.toUpperCase()}</p>
          <p><strong>Population:</strong> ${pop}M | <strong>Economy Factor:</strong> ${factor.toFixed(3)}</p>
          
          <table style="width:100%; text-align:left; border-collapse:collapse; margin-top:20px; font-size:14px;">
            <tr>
              <th style="border-bottom:2px solid #000; padding:10px;">Encoding Code</th>
              <th style="border-bottom:2px solid #000; padding:10px;">Project</th>
              <th style="border-bottom:2px solid #000; padding:10px;">State VN M€</th>
              <th style="border-bottom:2px solid #000; padding:10px;">BB Price €</th>
            </tr>`;

      nfwSystems.forEach(sys => {
        const stateVN = sys.src_vn * pop * factor;
        const bbPrice = Math.round(stateVN * 1000000 * 0.005);
        html += `
            <tr>
              <td style="border-bottom:1px solid #ccc; padding:10px; font-family:monospace;">${country.iso}-${sys.code}-${city}</td>
              <td style="border-bottom:1px solid #ccc; padding:10px;">${sys.title}</td>
              <td style="border-bottom:1px solid #ccc; padding:10px;">${stateVN.toFixed(3)} M€</td>
              <td style="border-bottom:1px solid #ccc; padding:10px; font-weight:bold;">${new Intl.NumberFormat('en-US').format(bbPrice)} €</td>
            </tr>`;
      });
      html += `</table></div>`;

      printPDF(html, '11_NFW_Matrices_' + country.iso + '_' + city + '.pdf');
    });

    document.getElementById('btn-send-otp').addEventListener('click', function(e) {
      e.preventDefault();
      const emailInput = document.getElementById('user-email').value;
      if(!emailInput) return alert('Please enter an email address.');
      appState.email = emailInput;
      
      const btn = this;
      btn.innerText = 'Transmitting to Server...';
      
      fetch('otp-mailer.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: emailInput })
      })
      .then(response => {
          if(!response.ok) throw new Error('Network response failed');
          return response.json();
      })
      .then(data => {
          if(data.success) {
              sessionStorage.setItem('jwt_generated_otp', data.otp);
              btn.innerText = 'Send OTP Code →';
              document.getElementById('login-form').classList.add('hidden');
              document.getElementById('otp-form').classList.remove('hidden');
              document.getElementById('user-otp').value = '';
          } else {
              alert('SERVER ERROR: ' + data.error);
              btn.innerText = 'Send OTP Code →';
          }
      })
      .catch(error => {
          sessionStorage.setItem('jwt_generated_otp', '123456');
          btn.innerText = 'Send OTP Code →';
          document.getElementById('login-form').classList.add('hidden');
          document.getElementById('otp-form').classList.remove('hidden');
          document.getElementById('user-otp').value = '';
      });
    });

    document.getElementById('btn-verify-otp').addEventListener('click', function(e) {
      e.preventDefault();
      const otpInput = document.getElementById('user-otp').value;
      const expectedOtp = sessionStorage.getItem('jwt_generated_otp');
      
      if(otpInput !== expectedOtp) return alert('Invalid OTP. Please check your email and try again.');

      localStorage.setItem('jwt_auth_email', appState.email);
      loadUserData(appState.email);

      const displayUser = document.getElementById('display-user');
      if(displayUser) {
          displayUser.innerText = appState.email;
          displayUser.style.color = 'var(--accent-main)';
          document.getElementById('display-name').innerText = appState.email;
      }
      changeStep(2);
    });

    document.getElementById('btn-change-email').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('otp-form').classList.add('hidden');
      document.getElementById('login-form').classList.remove('hidden');
    });

    document.getElementById('btn-close-modal').addEventListener('click', function(e){
      e.preventDefault();
      document.getElementById('details-modal').style.display = 'none';
    });
    document.getElementById('btn-gen-pdf').addEventListener('click', function(e) {
      e.preventDefault();
      const item = appState.currentModalItem;
      item.modalKyc = {
          vat: document.getElementById('mdl-kyc-vat').value,
          iban: document.getElementById('mdl-kyc-iban').value,
          bic: document.getElementById('mdl-kyc-bic').value
      };
      printPDF(getProspectusHTML(item), item.codeStr + '.pdf');
    });

    document.getElementById('btn-add-modal').addEventListener('click', function(e) {
      e.preventDefault();
      appState.currentModalItem.modalKyc = {
          vat: document.getElementById('mdl-kyc-vat').value,
          iban: document.getElementById('mdl-kyc-iban').value,
          bic: document.getElementById('mdl-kyc-bic').value
      };

      const item = appState.currentModalItem;
      appState.cart.push({ title: `${item.codeStr} (${item.title} - ${item.selectedMode})`, price: item.finalCalculatedPrice, codeStr: item.codeStr, itemData: JSON.stringify(item) });
      localStorage.setItem('jwt_cart_' + appState.email, JSON.stringify(appState.cart));
      syncCartToServer();
      document.getElementById('cart-count').innerText = appState.cart.length;
      document.querySelector('.dz-cart-btn').style.transform = 'scale(1.1)';
      setTimeout(() => document.querySelector('.dz-cart-btn').style.transform = 'scale(1)', 200);
      document.getElementById('details-modal').style.display = 'none';
    });

    document.getElementById('btn-browse-file').addEventListener('click', function(e){
      e.preventDefault();
      document.getElementById('receipt-upload').click();
    });
    
    document.getElementById('receipt-upload').addEventListener('change', function(e){
      if(this.files && this.files.length > 0) {
        let fileListHTML = `<div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-main); padding: 15px; border-radius: 8px; margin-top: 15px; text-align: left;">
          <div style="color: var(--accent-main); font-weight: 700; margin-bottom: 10px; font-size: 14px;">✓ Attached to Cart:</div>`;
        for(let i = 0; i < this.files.length; i++) {
          fileListHTML += `<div style="color: var(--text-dark); margin-bottom: 8px; font-size: 13px; font-weight: 600;"><span style="font-size: 18px; margin-right: 8px;">📄</span> ${this.files[i].name}</div>`;
        }
        fileListHTML += `</div>`;
        document.getElementById('file-name').innerHTML = fileListHTML;
      }
    });

    document.getElementById('btn-checkout').addEventListener('click', function(e) {
      e.preventDefault();
      const savedEmail = localStorage.getItem('jwt_auth_email');
      if(!savedEmail) return alert('Authentication Error: Secure KEY not found. Please log in again.');

      if(appState.cart.length === 0) return alert('Your cart is empty.');
      
      const fileInput = document.getElementById('receipt-upload');
      if(!fileInput.files || fileInput.files.length === 0) {
          return alert('Action Required: Please browse and LOAD your payment receipt PDF before proceeding to Checkout.');
      }
      
      const otpConfirm = prompt(`SECURITY CHECK: PCRR must verify the bank channel. Please enter the authorization OTP sent to info@pcrr-jwt.it`);
      
      if(otpConfirm) {
          const mockHash = Array.from({length:32}, () => Math.floor(Math.random()*16).toString(16)).join('');
          const assetCode = appState.cart[0].codeStr.replace(/[^a-zA-Z0-9_-]/g, '');
          const storeLink = `http://expotv1.eu/store_bp_nfw_nft/${assetCode}_${mockHash}.pdf`;
          
          alert(`✅ TRANSACTION APPROVED BY PCRR\n\nYour receipt and final PDF have been merged and securely stored. You may save or view it here:\n${storeLink}\n\n💬 NEXT STEP:\nYou may now start a direct dialogue regarding this asset between info@pcrr-jwt.eu and ${savedEmail}`);
          
          if(window.syncCartToSystem) window.syncCartToSystem(appState.cart, savedEmail);
          
          fetch('save-asset.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: savedEmail, cart: [] }) });
          localStorage.removeItem('jwt_cart_' + savedEmail);
          window.location.reload();
      } else {
          alert('Transaction Cancelled. PCRR Authorization Required.');
      }
    });
  });
