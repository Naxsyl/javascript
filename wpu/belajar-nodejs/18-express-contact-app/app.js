const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
} = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

// Gunakan ejs
app.set("view engine", "ejs");

// Third-party Middleware
app.use(expressLayouts);
// Built-in middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "Nasril",
      email: "nasril@gmail.com",
    },
    {
      nama: "Rizky",
      email: "rizky@gmail.com",
    },
    {
      nama: "Ryan",
      email: "ryan@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Nasril",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});
app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
    msg: req.flash("msg"),
  });
});

// Halaman form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// proses data contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error("Nama Contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("nohp", "No Hp tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add-contact", {
        title: "form tambah data contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      // kirimkan flash message
      res.flash("msg", "Data Contact Berhasil ditambahkan!");
      res.redirect("/contact");
    }
  }
);

// Halaman detail contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
