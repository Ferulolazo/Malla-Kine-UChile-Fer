const ramos = [
  {
    nombre: "Bases integradas de química, bioquímica, biología celular y genética",
    semestre: 1,
    creditos: 11,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Física",
    semestre: 1,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Introducción a la kinesiología",
    semestre: 1,
    creditos: 1,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Anatomía estructural y funcional I",
    semestre: 1,
    creditos: 6,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Estructura y función tisular",
    semestre: 1,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Estrategias de búsqueda bibliográfica",
    semestre: 1,
    creditos: 3,
    tipo: "investigacion",
    prerrequisitos: []
  },
  {
    nombre: "Cursos de formación general I",
    semestre: 1,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés I",
    semestre: 1,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Principios de evolución",
    semestre: 2,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Fisiología general",
    semestre: 2,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Bases integradas de química, bioquímica, biología celular y genética" , "Física"]
  },
  {
    nombre: "Neuroanatomía",
    semestre: 2,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Anatomía estructural y funcional II",
    semestre: 2,
    creditos: 7,
    tipo: "obligatorio",
    prerrequisitos: ["Anatomía estructural y funcional I"]
  },
  {
    nombre: "Introducción al estudio del movimiento humano",
    semestre: 2,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Educación física I",
    semestre: 3,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Biomecánica, lesión y reparación tisular",
    semestre: 2,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: ["Estructura y función tisular"]
  },
  {
    nombre: "Lectura comprensiva de artículos científicos",
    semestre: 2,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: []
  },
  {
    nombre: "Cursos de formación general II",
    semestre: 2,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés II",
    semestre: 2,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: ["Inglés I"]
  },
  {
    nombre: "Fisiología de Sistemas",
    semestre: 3,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Fisiología general"]
  },
  {
    nombre: "Bases integradas de infectología, inmunología y farmacología general",
    semestre: 3,
    creditos: 6,
    tipo: "obligatorio",
    prerrequisitos: ["Fisiología general" , "Neuroanatomía"]
  },
  {
    nombre: "Control y aprendizaje motor",
    semestre: 3,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Educación física II",
    semestre: 5,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: ["Educación física I"]
  },
  {
    nombre: "Examen Kinésico Básico",
    semestre: 3,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Biomecánica, lesión y reparación tisular" , "Anatomía estructural y funcional II"]
  },
  {
    nombre: "Fundamentos de la investigación científica",
    semestre: 3,
    creditos: 5,
    tipo: "investigación",
    prerrequisitos: []
  },
  {
    nombre: "Cursos de formación general III",
    semestre: 3,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés III",
    semestre: 3,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: ["Inglés II"]
  },
  {
    nombre: "Kinesiología del desarrollo psicomotor",
    semestre: 4,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: ["Control y aprendizaje motor"]
  },
  {
    nombre: "Procedimientos terapéuticos básicos y generales",
    semestre: 4,
    creditos: 7,
    tipo: "obligatorio",
    prerrequisitos: ["Introducción al estudio del movimiento humano" , "Examen Kinésico Básico"]
  },
  {
    nombre: "Fisiopatología y farmacología de sistemas",
    semestre: 4,
    creditos: 6,
    tipo: "obligatorio",
    prerrequisitos: ["Bases integradas de infectología, inmunología y farmacología general" , "Fisiología de sistemas"]
  },
  {
    nombre: "Lectura crítica de estudios científicos",
    semestre: 4,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: ["Lectura comprensiva de artículos científicos"]
  },
  {
    nombre: "Examen de la condición física y la conducta motora",
    semestre: 4,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Examen Kinésico Básico"]
  },
  {
    nombre: "Análisis Epidemiológico",
    semestre: 4,
    creditos: 2,
    tipo: "investigación",
    prerrequisitos: []
  },
  {
    nombre: "Cursos de formación general IV",
    semestre: 4,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés IV",
    semestre: 4,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: ["Inglés III"]
  },
  {
    nombre: "Evaluación e intervención en cuidados respiratorios I",
    semestre: 5,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Fisiopatología y farmacología de sistemas", "Examen de la condición física y la conducta motora"]
  },
  {
    nombre: "Evaluación e intervención en Neurokinesiología I",
    semestre: 5,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Kinesiología del desarrollo psicomotor"]
  },
  {
    nombre: "Evaluación e intervención en Músculo - Esquelético I",
    semestre: 5,
    creditos: 8,
    tipo: "obligatorio",
    prerrequisitos: ["Procedimientos terapéuticos básicos y generales"]
  },
  {
    nombre: "Efectos de la actividad física en la salud",
    semestre: 5,
    creditos: 4,
    tipo: "electivo",
    prerrequisitos: ["Fisiopatología y farmacología de sistemas" , "Examen de la condición física y la conducta motora"]
  },
  {
    nombre: "Intervención kinésica I",
    semestre: 5,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Análisis del modelo de salud chileno",
    semestre: 5,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: ["Análisis Epidemiológico"]
  },
  {
    nombre: "Revisión bibliográfica",
    semestre: 5,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: ["Lectura crítica de artículos científicos"]
  },
  {
    nombre: "Módulo integrado interdisciplinario y multiprofesional I",
    semestre: 5,
    creditos: 4,
    tipo: "formación",
    prerrequisitos: []
  },   
  {
    nombre: "Evaluación e intervención en cuidados respiratorios II",
    semestre: 6,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación e intervención en cuidados respiratorios I"] 
  },
  {
    nombre: "Evaluación e intervención en Neurokinesiología II",
    semestre: 6,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación e intervención en Neurokinesiología I"]
  },
  {
    nombre: "Evaluación e intervención en Músculo - Esquelético II",
    semestre: 6,
    creditos: 8,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación e intervención en Músculo - Esquelético I"]
  },
  {
    nombre: "Razonamiento Clínico",
    semestre: 6,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación e intervención en cuidados respiratorios I" , "Evaluación e intervención en Neurokinesiología I" , "Evaluación e intervención en Músculo - Esquelético I"]
  },
  {
    nombre: "Actividad física y deportes",
    semestre: 6,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: ["Educación Física II" , "Efectos de actividad física en la salud"]
  },
  {
    nombre: "Responsabilidad del ejercicio profesional",
    semestre: 6,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Diseño y formación de proyectos de investigación",
    semestre: 6,
    creditos: 5,
    tipo: "investigacion",
    prerrequisitos: ["Revisión bibliográfica"]
  },
  {
    nombre: "Intervención profesional en contexto I",
    semestre: 7,
    creditos: 10,
    tipo: "obligatorio",
    prerrequisitos: ["Efectos de actividad física en la salud", "Evaluación e intervención en cuidados respiratorios II" , "Evaluación e intervención en Neurokinesiología II", "Evaluación e intervención en Músculo - Esquelético II"]
  },
  {
    nombre: "Análisis de la relación persona - entorno",
    semestre: 7,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación e intervención en cuidados respiratorios II", "Evaluación e intervención en Neurokinesiología II", "Evaluación e intervención en Músculo - Esquelético II"]
  },
  {
    nombre: "Estrategias deportivas y recreativas",
    semestre: 7,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: ["Actividad física y deportes"]
  },
  {
    nombre: "Determinantes sociales de la salud",
    semestre: 7,
    creditos: 4,
    tipo: "investigacion",
    prerrequisitos: ["Análisis del modelo de salud chileno"]
  },
  {
    nombre: "Conceptos básicos de la administración en salud",
    semestre: 7,
    creditos: 3,
    tipo: "investigación",
    prerrequisitos: ["Análisis del modelo de salud chileno"]
  },
  {
    nombre: "Ejecución de proyecto de investigación I",
    semestre: 7,
    creditos: 5,
    tipo: "investigación",
    prerrequisitos: ["Diseño y formación de proyectos de investigación"]
  },
  {
    nombre: "Metodologías de enseñanza aprendizaje",
    semestre: 7,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: []
  },
  {
    nombre: "Intervención profesional en contexto II",
    semestre: 8,
    creditos: 8,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación e intervención en cuidados respiratorios II", "Evaluación e intervención en Neurokinesiología II" , "Evaluación e intervención en Músculo - Esquelético II"]
  },
  {
    nombre: "Evaluación Ergonómica",
    semestre: 8,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: ["Análisis de la relación persona - entorno"]
  },
  {
    nombre: "Estrategias deportivas y recreativas aplicadas",
    semestre: 8,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: ["Estrategias deportivas y recreativas"]
  },
  {
    nombre: "Programas de promoción y prevención en salud",
    semestre: 8,
    creditos: 3,
    tipo: "investigación",
    prerrequisitos: ["Determinantes sociales de la salud"]
  },
  {
    nombre: "Proyectos de emprendimiento",
    semestre: 8,
    creditos: 2,
    tipo: "investigación",
    prerrequisitos: ["Conceptos básicos de administración en salud"]
  },
  {
    nombre: "Ejecución de proyecto de investigación II",
    semestre: 8,
    creditos: 5,
    tipo: "investigación",
    prerrequisitos: ["Ejecución de proyecto de investigación I"]
  },
  {
    nombre: "Aplicación básica de metodologías docentes",
    semestre: 8,
    creditos: 2,
    tipo: "investigación",
    prerrequisitos: ["Metodologías de enseñanza aprendizaje"]
  },
  {
    nombre: "Módulo integrado interdisciplinario, multiprofesional II",
    semestre: 8,
    creditos: 5,
    tipo: "formación",
    prerrequisitos: ["Módulo integrado interdisciplinario, multiprofesional I"]
  },
  {
    nombre: "Intervención profesional I",
    semestre: 9,
    creditos: 25,
    tipo: "obligatorio",
    prerrequisitos: ["Intervención profesional en contexto II"]
  },
  {
    nombre: "Proyectos de intervención ergonómica",
    semestre: 9,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación Ergonómica"]
  },
  {
    nombre: "Comunicación científica",
    semestre: 9,
    creditos: 2,
    tipo: "investigación",
    prerrequisitos: ["Ejecución de proyecto de investigación II"]
  },
  {
    nombre: "Intervención profesional II",
    semestre: 10,
    creditos: 22,
    tipo: "obligatorio",
    prerrequisitos: ["Intervención profesional I"]
  },
  {
    nombre: "Cursos de profundización disciplinar y profesional",
    semestre: 10,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Intervención profesional en contexto I", "Intervención profesional en contexto II"]
  },
  {
    nombre: "Intervención en salud comunitaria",
    semestre: 10,
    creditos: 2,
    tipo: "investigación",
    prerrequisitos: ["Programas de promoción y prevención en salud"]
  },
  {
    nombre: "Administración en salud",
    semestre: 10,
    creditos: 2,
    tipo: "investigación",
    prerrequisitos: ["Conceptos básicos de administración en salud"]
  },
  ];

