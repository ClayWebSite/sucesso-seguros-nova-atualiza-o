"use client"

import { Shield, FileText, Lock, Eye, Database, Users, Clock, Mail, ChevronRight, Cookie } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-800 font-medium">Política de Cookies e Privacidade</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative py-16 md:py-24 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan-50/50 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 text-white mb-6 shadow-lg shadow-primary/25">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Política de Cookies e Privacidade</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Política de cookies, privacidade e informações sobre o tratamento de dados pessoais da Sucesso Seguros
              Corretora LTDA
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Navigation */}
      <motion.section
        className="py-8 border-y border-slate-100 bg-white sticky top-20 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: FileText, label: "Introdução", href: "#introducao" },
              { icon: Database, label: "Coleta de Dados", href: "#coleta" },
              { icon: Eye, label: "Uso dos Dados", href: "#uso" },
              { icon: Users, label: "Compartilhamento", href: "#compartilhamento" },
              { icon: Lock, label: "Segurança", href: "#seguranca" },
              { icon: Cookie, label: "Cookies", href: "#cookies" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-primary/10 hover:text-primary text-slate-600 text-sm font-medium transition-all duration-300"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introdução */}
            <motion.div variants={fadeInUp} id="introducao" className="mb-12 scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Introdução</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  A <strong className="text-slate-800">SUCESSO SEGUROS CORRETORA LTDA</strong> protege a
                  confidencialidade de dados pessoais e dados sensíveis que lhe são confiados pelo cliente e titular
                  desses dados.
                </p>
                <p>
                  A proteção da privacidade e do uso legal de dados pessoais é um dos pilares da SUCESSO SEGUROS
                  CORRETORA LTDA, que tem como compromisso a garantia da segurança dos dados e da privacidade de nossos
                  usuários.
                </p>
                <p>
                  A coleta de dados pessoais e dados sensíveis para tratamento é realizada pela SUCESSO SEGUROS
                  CORRETORA LTDA com base em medidas necessárias para assegurar a exatidão, integridade,
                  confidencialidade, e anonimização, bem como garantir o respeito à liberdade, privacidade,
                  inviolabilidade da intimidade, imagem, enfim, todos os direitos dos titulares, inclusive o exercício
                  do direito de solicitar acesso, correção e eliminação de dados pessoais e sensíveis armazenados em
                  banco de dados e sistema digital.
                </p>
                <p>
                  Esta política de privacidade explica como seus dados pessoais são coletados, usados, armazenados e
                  divulgados por nós através de nossa plataforma e sistemas.
                </p>
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="text-amber-800 text-sm">
                    <strong>Importante:</strong> Você deverá ler atentamente esta Política de Privacidade e, se estiver
                    de acordo com seu conteúdo, deverá se manifestar mediante a aceitação expressa quando solicitado no
                    site, o que demonstrará seu consentimento livre, expresso e informado.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quem Somos */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Quem Somos</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg font-semibold text-slate-800">SUCESSO SEGUROS CORRETORA LTDA</p>
                <p>
                  Para efeitos da Lei Geral de Proteção de Dados 13.709/2018, a SUCESSO SEGUROS CORRETORA LTDA realiza o
                  tratamento de seus dados pessoais, como controladora ou operadora, em acordo com esta política.
                </p>
                <p>
                  Você pode entrar em contato com nosso Encarregado de Proteção de Dados ("DPO") enviando um e-mail para{" "}
                  <a href="mailto:cotacaosucesso@gmail.com" className="text-primary hover:underline">
                    cotacaosucesso@gmail.com
                  </a>{" "}
                  ou por correio tradicional, enviando-nos uma consulta para nosso endereço registrado.
                </p>
              </div>
            </motion.div>

            {/* Seções numeradas */}
            {[
              {
                number: "1",
                title: "Atualização da Política de Privacidade",
                icon: Clock,
                content: (
                  <p>
                    Sempre que a empresa entender necessário, a Política de Privacidade poderá sofrer alterações que
                    serão publicadas em nosso site. Essas alterações serão válidas, eficazes e vinculantes após a nova
                    versão ser divulgada no nosso site ou serem comunicadas de qualquer outra forma a você.
                  </p>
                ),
              },
              {
                number: "2",
                title: "Coleta de Dados Pessoais",
                icon: Database,
                id: "coleta",
                content: (
                  <>
                    <p>
                      A coleta de dados pessoais é necessária para que a SUCESSO SEGUROS CORRETORA LTDA ofereça serviços
                      e funcionalidades adequados às necessidades dos usuários, bem como para personalizar serviços,
                      fazendo com que sua experiência seja a mais cômoda e satisfatória possível.
                    </p>
                    <p>
                      Ao solicitar dados pessoais e dados pessoais sensíveis, a SUCESSO SEGUROS CORRETORA LTDA irá
                      solicitar o consentimento do usuário por meio do Termo de Consentimento, seguindo e cumprindo as
                      obrigações legais e regulatórias.
                    </p>
                    <p>
                      Dados de menores de idade ou incapazes podem ser coletados mediante o consentimento expresso dos
                      responsáveis legais e serão coletados para as finalidades descritas nesta política, por exemplo,
                      quando essas pessoas forem beneficiárias dos seguros ofertados pela Sucesso Seguros.
                    </p>
                  </>
                ),
              },
              {
                number: "3",
                title: "Informações Utilizadas e Forma de Coleta",
                icon: FileText,
                content: (
                  <>
                    <p>
                      Nós tratamos Dados Pessoais de quem é ou foi nosso cliente ou teve algum relacionamento conosco,
                      foi ou é representante, procurador, empregado, sócio de algum cliente, empresa ou entidade com a
                      qual nos relacionamos.
                    </p>
                    <div className="mt-4 space-y-3">
                      <h4 className="font-semibold text-slate-800">Os Dados Pessoais incluem:</h4>
                      <ul className="space-y-2">
                        {[
                          {
                            label: "Dados cadastrais",
                            desc: "nome, data de nascimento, sexo, RG, CPF, documentos de identificação, endereço, telefones, e-mail, profissão, estado civil, nacionalidade, entre outros.",
                          },
                          {
                            label: "Dados Pessoais Sensíveis",
                            desc: "dados biométricos, inclusive facial e/ou digital ou outros dados pessoais sensíveis, de acordo com a legislação aplicável.",
                          },
                          {
                            label: "Dados financeiros e transacionais",
                            desc: "informações sobre operações e transações bancárias, financeiras e de pagamento, produtos e serviços contratados.",
                          },
                          {
                            label: "Dados sobre terceiros",
                            desc: "filiação, representantes, garantidor, contrapartes, procuradores, sócios ou beneficiários de produtos e serviços.",
                          },
                          {
                            label: "Informações sobre dispositivos",
                            desc: "informações sobre seu dispositivo, conexão, identificação e uso do dispositivo.",
                          },
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>
                              <strong className="text-slate-800">{item.label}:</strong> {item.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ),
              },
              {
                number: "4",
                title: "Objetivo da Utilização de Dados",
                icon: Eye,
                id: "uso",
                content: (
                  <>
                    <p>
                      A SUCESSO SEGUROS CORRETORA LTDA realiza o tratamento de dados pessoais de acordo com as bases
                      legais previstas na Lei Geral de Proteção de Dados (LGPD), nas situações em que o consentimento do
                      Titular dos Dados Pessoais for coletado e para o exercício regular de direitos.
                    </p>
                    <div className="mt-6 grid gap-4">
                      {[
                        {
                          title: "Realizar atividades e prestar serviços",
                          items: [
                            "Manter cadastro atualizado e verificar identidade",
                            "Dar cumprimento ao contrato",
                            "Atender clientes com suporte e dúvidas",
                          ],
                        },
                        {
                          title: "Entender clientes e oferecer produtos adequados",
                          items: [
                            "Avaliar perfil e identificar oportunidades",
                            "Realizar pesquisas de melhoria",
                            "Personalizar ofertas e comunicações",
                          ],
                        },
                        {
                          title: "Segurança e cumprimento legal",
                          items: [
                            "Identificar e prevenir riscos de segurança",
                            "Cumprir obrigações legais e regulatórias",
                            "Manter e melhorar nossas atividades",
                          ],
                        },
                      ].map((section, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-xl">
                          <h4 className="font-semibold text-slate-800 mb-2">{section.title}</h4>
                          <ul className="space-y-1 text-sm">
                            {section.items.map((item, j) => (
                              <li key={j} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ),
              },
              {
                number: "5",
                title: "Informações que Podem ser Compartilhadas",
                icon: Users,
                id: "compartilhamento",
                content: (
                  <>
                    <p>
                      A SUCESSO SEGUROS CORRETORA LTDA somente compartilha suas informações quando é necessário ou
                      pertinente, para as finalidades previstas nos contratos e nessa Política de Privacidade, dentro de
                      padrões rígidos de segurança.
                    </p>
                    <div className="mt-4 space-y-2">
                      {[
                        "Com parceiros estratégicos para oferta e contratação de produtos e serviços",
                        "Com prestadores de serviços e fornecedores para desenvolvimento de atividades",
                        "Com órgãos reguladores e entidades públicas para cumprimento de obrigações legais",
                        "Para cumprimento de requisições judiciais, administrativas ou arbitrais",
                        "Para identificação, prevenção e investigação de possíveis infrações ou atos ilícitos",
                        "Para prevenir riscos, fraudes e garantir a segurança",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                          <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm">
                      Para garantir a privacidade e segurança na transmissão dos dados pessoais utilizaremos
                      criptografia com SSL (Secure Sockets Layer) de todas as informações trocadas via internet.
                    </p>
                  </>
                ),
              },
              {
                number: "6",
                title: "Conservação de Dados Pessoais",
                icon: Clock,
                content: (
                  <p>
                    Os dados são conservados pelo período estritamente necessário para cada uma das finalidades
                    descritas e/ou de acordo com prazos legais vigentes. Em caso de litígio pendente, os dados podem ser
                    conservados até trânsito em julgado da decisão. A SUCESSO SEGUROS CORRETORA LTDA manterá em
                    funcionamento todos os meios técnicos ao seu alcance para evitar a perda, má utilização, alteração,
                    acesso não autorizado e apropriação indevida dos dados pessoais.
                  </p>
                ),
              },
              {
                number: "7",
                title: "Direitos dos Usuários",
                icon: Shield,
                content: (
                  <>
                    <p>
                      Nos termos da legislação aplicável, o titular dos dados poderá a qualquer tempo solicitar o acesso
                      aos dados que lhe digam respeito, bem como a sua retificação, eliminação ou a limitação de uso do
                      dado pessoal, a portabilidade dos seus dados, ou ainda opor-se ao seu tratamento, exceto nos casos
                      previstos em lei.
                    </p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-3">
                      {[
                        "Ser informado sobre o processamento de dados",
                        "Apresentar reclamações",
                        "Solicitar cópia dos dados processados",
                        "Pedir exclusão ou correção de dados",
                        "Opor ao processamento de dados",
                        "Restringir o processamento",
                        "Requerer a portabilidade de dados",
                        "Retirar consentimento a qualquer momento",
                      ].map((right, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 bg-green-50 rounded-lg text-green-800 text-sm"
                        >
                          <Shield className="w-4 h-4 flex-shrink-0" />
                          {right}
                        </div>
                      ))}
                    </div>
                  </>
                ),
              },
              {
                number: "8",
                title: "Tratamento dos Dados Pessoais",
                icon: Database,
                content: (
                  <>
                    <p>
                      Ao utilizar os serviços da SUCESSO SEGUROS CORRETORA LTDA, o usuário está consentindo com a
                      presente Política de Privacidade. O usuário tem o direito de retirar seu consentimento a qualquer
                      momento.
                    </p>
                    <p className="mt-3">
                      O tratamento de dados pessoais sem o consentimento do usuário apenas será realizado em razão de
                      interesse legítimo ou para as hipóteses previstas em lei, como cumprimento de obrigação legal,
                      execução de contrato, proteção da vida, tutela da saúde, entre outros.
                    </p>
                  </>
                ),
              },
              {
                number: "9",
                title: "Finalidade do Tratamento dos Dados Pessoais",
                icon: Eye,
                content: (
                  <p>
                    Os dados pessoais do usuário coletados pela SUCESSO SEGUROS CORRETORA LTDA têm por finalidade
                    facilitar, agilizar e cumprir os compromissos estabelecidos com o usuário e fazer cumprir as
                    solicitações realizadas. Os dados pessoais poderão ser utilizados também com finalidade comercial,
                    para personalizar o conteúdo oferecido ao usuário, bem como para dar subsídio para a melhora da
                    qualidade e funcionamento de seus serviços.
                  </p>
                ),
              },
              {
                number: "10",
                title: "Prazo de Conservação dos Dados Pessoais",
                icon: Clock,
                content: (
                  <>
                    <p>
                      Os dados pessoais do usuário serão conservados por um período não superior ao exigido para cumprir
                      os objetivos em razão dos quais eles são processados.
                    </p>
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                      <p className="font-semibold text-slate-800 mb-2">
                        Os dados apenas poderão ser conservados após o término para:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Cumprimento de obrigação legal ou regulatória
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Estudo por órgão de pesquisa (com anonimização)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Transferência a terceiro conforme legislação
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Uso exclusivo do controlador (dados anonimizados)
                        </li>
                      </ul>
                    </div>
                  </>
                ),
              },
              {
                number: "11",
                title: "Responsável pelo Tratamento dos Dados",
                icon: Users,
                content: (
                  <p>
                    O controlador, responsável pelo tratamento dos dados pessoais do usuário, é a pessoa física ou
                    jurídica, a autoridade pública, a agência ou outro organismo que, individualmente ou em conjunto com
                    outras, determina as finalidades e os meios de tratamento de dados pessoais. O responsável pelo
                    tratamento dos dados pessoais coletados é a SUCESSO SEGUROS CORRETORA LTDA, e o contato poderá ser
                    feito pelo e-mail:{" "}
                    <a href="mailto:cotacaosucesso@gmail.com" className="text-primary hover:underline">
                      cotacaosucesso@gmail.com
                    </a>
                    .
                  </p>
                ),
              },
              {
                number: "12",
                title: "Segurança no Tratamento dos Dados Pessoais",
                icon: Lock,
                id: "seguranca",
                content: (
                  <>
                    <p>
                      A SUCESSO SEGUROS CORRETORA LTDA se compromete a aplicar as medidas técnicas e organizativas aptas
                      a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda,
                      alteração, comunicação ou difusão de tais dados.
                    </p>
                    <p className="mt-3">
                      Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas
                      adequadas; os custos de aplicação; a natureza, o âmbito, o contexto e as finalidades do
                      tratamento; e os riscos para os direitos e liberdades do usuário.
                    </p>
                  </>
                ),
              },
              {
                number: "13",
                title: "Links para Sites e Aplicativos de Terceiros",
                icon: FileText,
                content: (
                  <p>
                    O site da SUCESSO SEGUROS pode conter links para sites e aplicativos de terceiros, ferramentas de
                    redes sociais, aplicações ou plug-ins. Esses terceiros poderão ter acesso à informação sobre a
                    visita do usuário. Note que dentro destes sites de terceiros você estará sujeito a outros termos de
                    uso e outras políticas de privacidade. Nossos termos de uso e política de Privacidade não são
                    válidos nos sites de terceiros. Recomendamos a leitura das respectivas políticas de privacidade dos
                    sites de terceiros.
                  </p>
                ),
              },
              {
                number: "14",
                title: "Sobre os Cookies (Política de Cookies)",
                icon: Cookie,
                id: "cookies",
                content: (
                  <>
                    <p>
                      Os cookies permitem a coleta de texto que podem ou não ser adicionados no navegador do
                      dispositivo, das autorizações concedidas por você através das configurações no dispositivo e das
                      funcionalidades utilizadas em cada aplicação.
                    </p>
                    <div className="mt-6 p-5 bg-gradient-to-br from-primary/5 to-cyan-50 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-slate-800 mb-3">O que são cookies?</h4>
                      <p className="text-sm">
                        São arquivos de informação que são armazenados no seu computador ou dispositivos móveis através
                        do navegador de internet (browser). Estes arquivos permitem que, durante um período, um website
                        "se lembre" das ações e preferências registradas. Os cookies podem ser persistentes ou de
                        sessão.
                      </p>
                    </div>
                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                      <div className="p-4 bg-white rounded-xl border border-slate-200">
                        <h5 className="font-semibold text-slate-800 mb-2">Finalidades</h5>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Analítica: análise estatística da navegação
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Publicitária: análise de hábitos e preferências
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-slate-200">
                        <h5 className="font-semibold text-slate-800 mb-2">Tipos de Cookies</h5>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Cookies primários
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Cookies de terceiros
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Cookies de sessão
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Cookies persistentes
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <p className="text-amber-800 text-sm">
                        <strong>Desativar cookies:</strong> Você pode desativar ou excluir os cookies nas configurações
                        do navegador. Apenas lembramos que se determinados cookies forem desabilitados, o nosso site ou
                        alguns de seus recursos poderão não funcionar corretamente.
                      </p>
                    </div>
                  </>
                ),
              },
              {
                number: "15",
                title: "Reclamações e Dúvidas",
                icon: Mail,
                content: (
                  <>
                    <p>
                      Caso tenha qualquer dúvida relacionada com o tratamento dos seus dados pessoais e com os direitos
                      que lhe são conferidos pela legislação aplicável, poderá acionar a SUCESSO SEGUROS através do
                      e-mail:{" "}
                      <a href="mailto:cotacaosucesso@gmail.com" className="text-primary hover:underline">
                        cotacaosucesso@gmail.com
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      O usuário tem ainda o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de
                      Dados conforme previsto em lei.
                    </p>
                  </>
                ),
              },
            ].map((section, index) => (
              <motion.div key={index} variants={fadeInUp} id={section.id} className="mb-12 scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    <span className="text-primary">{section.number}.</span> {section.title}
                  </h2>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-4 text-slate-600 leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {/* Footer do documento */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 text-center p-8 bg-gradient-to-br from-primary/5 to-cyan-50 rounded-2xl border border-primary/10"
            >
              <p className="text-slate-600">Sucesso Seguros 2025 - Todos os direitos reservados</p>
              <p className="text-sm text-slate-500 mt-2">Última atualização: Dezembro de 2025</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-primary to-cyan-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ainda tem dúvidas sobre nossa política?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco. Nossa equipe está pronta para esclarecer qualquer questão sobre o tratamento dos
            seus dados.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Fale Conosco
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
