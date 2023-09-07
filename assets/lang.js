
$(document).ready(function() {

var lang = $('#lang-list-desktop-header .disclosure-list__item--current ').find('a').attr('data-value');

  $('.template-suffix-contact').addClass(lang);

 var CV =$(".cs-form-wrap").find('.element-group #CV'); 
  $('<div class="file_input"><span class="input-group-text" id="text_input_span_id">Choisir le fichier</span><input type="text" id="text_input_id" class="form-control" placeholder="aucun fichier sélectionné"style="caret-color: transparent" autocomplete="off"></div>' ).insertAfter( CV );

 // bind file-input-form click action to text-input-span
    $('#text_input_span_id').click(function () {
        $("#CV").trigger('click');
    })
   $('#text_input_id').click(function () {
        $("#CV").trigger('click');
    })
  
    // display file name in text-input-form    
    $("#CV").change(function () {
        $('#text_input_id').val(this.value.replace(/C:\\fakepath\\/i, ''))
    })


 var Mediakit_file =$(".cs-form-wrap").find('.element-group #envoyez_votre_kit_média'); 
  $('<div class="file_input"><span class="input-group-text" id="mediakit_span_id">Choisir le fichier</span><input type="text" id="mediakit_file" class="form-control" placeholder="aucun fichier sélectionné"style="caret-color: transparent" autocomplete="off"></div>' ).insertAfter( Mediakit_file );

 // bind file-input-form click action to text-input-span
    $('#mediakit_span_id').click(function () {
        $("#envoyez_votre_kit_média").trigger('click');
    })
    $('#mediakit_file').click(function () {
        $("#envoyez_votre_kit_média").trigger('click');
    })
    // display file name in text-input-form    
    $("#envoyez_votre_kit_média").change(function () {
        $('#mediakit_file').val(this.value.replace(/C:\\fakepath\\/i, ''))
    })



 var Invoice_file =$(".cs-form-wrap").find('.element-group #Facture'); 
  $('<div class="file_input"><span class="input-group-text" id="invoice_span_id">Choisir le fichier</span><input type="text" id="invoice_file" class="form-control" placeholder="aucun fichier sélectionné"style="caret-color: transparent" autocomplete="off"></div>' ).insertAfter( Invoice_file );

 // bind file-input-form click action to text-input-span
    $('#invoice_span_id').click(function () {
        $("#Facture").trigger('click');
    })
   $('#invoice_file').click(function () {
        $("#Facture").trigger('click');
    })
    // display file name in text-input-form    
    $("#Facture").change(function () {
        $('#invoice_file').val(this.value.replace(/C:\\fakepath\\/i, ''))
    })



 var Vdo_file =$(".cs-form-wrap").find('.element-group #file'); 
  $('<div class="file_input"><span class="input-group-text" id="vdofile_span_id">Choisir le fichier</span><input type="text" id="vdofile_input_id" class="form-control" placeholder="aucun fichier sélectionné"style="caret-color: transparent" autocomplete="off"></div>' ).insertAfter( Vdo_file );

 // bind file-input-form click action to text-input-span
    $('#vdofile_span_id').click(function () {
        $("#file").trigger('click');
    })
   $('#vdofile_input_id').click(function () {
        $("#file").trigger('click');
    })
    // display file name in text-input-form    
    $("#file").change(function () {
        $('#vdofile_input_id').val(this.value.replace(/C:\\fakepath\\/i, ''))
    })

$('.element-group #CV').hide();
$('.element-group #envoyez_votre_kit_média').hide();
$('.element-group #Facture').hide();
$('.element-group #file').hide();

  
var title =$(".cs-form-wrap").find('.element-group h1'); 
var sub_title =$(".cs-form-wrap").find('.element-group label[for="objet"]');
var sel_option0 =$(".cs-form-wrap").find('.condition-trigger option:eq(0)'); 
var sel_option1 =$(".cs-form-wrap").find('.condition-trigger option:eq(1)'); 
var sel_option2=$(".cs-form-wrap").find('.condition-trigger option:eq(2)'); 
var sel_option3 =$(".cs-form-wrap").find('.condition-trigger option:eq(3)'); 
var sel_option4 =$(".cs-form-wrap").find('.condition-trigger option:eq(4)'); 
var sel_option5 =$(".cs-form-wrap").find('.condition-trigger option:eq(5)'); 
 
 
   
 
  var name =$(".cs-form-wrap").find('.element-group label[for="prénom"]');
  var name_placeholder =$(".cs-form-wrap").find('.element-group #prénom');
    //console.log(name);
  var lname =$(".cs-form-wrap").find('.element-group label[for="nom"]');
  var lname_placeholder =$(".cs-form-wrap").find('.element-group #nom');

  var Company =$(".cs-form-wrap").find('.element-group label[for="société"]');
  var Company_placeholder =$(".cs-form-wrap").find('.element-group #société');

  var Country =$(".cs-form-wrap").find('.element-group label[for="Pays"]');
  var Country_placeholder =$(".cs-form-wrap").find('.element-group #Pays');
  
  var Phone =$(".cs-form-wrap").find('.element-group label[for="Téléphone"]');
  
  var message =$(".cs-form-wrap").find('.element-group label[for="Votre_message"]');
  var msg_placeholder =$(".cs-form-wrap").find('.element-group textarea[name="Votre_message"]');
  
    var email =$(".cs-form-wrap").find('.element-group label[for="email"]');
  var email_placeholder =$(".cs-form-wrap").find('.element-group #email');

  var button =$(".cs-form-wrap").find('.element-group button[type="submit"]');
  var Invoice =$(".cs-form-wrap").find('.element-group label[for="Facture"]');
  var Video =$(".cs-form-wrap").find('.element-group label[for="file"]');

  var order_number =$(".cs-form-wrap").find('.element-group label[for="refcommande"]');
  var orde_placeholder =$(".cs-form-wrap").find('.element-group #refcommande');

  var tik_tok =$(".cs-form-wrap").find('.element-group label[for="url"]');
  var tiktok_placeholder =$(".cs-form-wrap").find('.element-group #url');

   var instagram =$(".cs-form-wrap").find('.element-group label[for="votre_page_instagram"]');
  var instagram_placeholder =$(".cs-form-wrap").find('.element-group #votre_page_instagram');

  var facebook =$(".cs-form-wrap").find('.element-group label[for="votre_page_facebook"]');
  var facebook_placeholder =$(".cs-form-wrap").find('.element-group #votre_page_facebook');
  
  var media_kit =$(".cs-form-wrap").find('.element-group label[for="envoyez_votre_kit_média"]');
  var paragraph =$(".cs-form-wrap").find('.element-group p');
  var Cv =$(".cs-form-wrap").find('.element-group label[for="CV"]');

 var CV_span =$(".cs-form-wrap").find('.element-group #text_input_span_id');
 var CV_input =$(".cs-form-wrap").find('.element-group #text_input_id');

  var media_span =$(".cs-form-wrap").find('.element-group #mediakit_span_id');
 var media_input =$(".cs-form-wrap").find('.element-group #mediakit_file');

  var Invoice_span =$(".cs-form-wrap").find('.element-group #invoice_span_id');
 var Invoice_input =$(".cs-form-wrap").find('.element-group #invoice_file');

  var filevdo_span =$(".cs-form-wrap").find('.element-group #vdofile_span_id');
 var filevdo_input =$(".cs-form-wrap").find('.element-group #vdofile_input_id');
    
//console.log(error_msg);
  var Country_reseller =$(".cs-form-wrap").find('.element-group label[for="Country"]');
  var sel_option_1 =$(".cs-form-wrap").find('#Country option:eq(0)'); 
   var sel_option_2 =$(".cs-form-wrap").find('#Country option:eq(1)'); 

if( lang=='en' ){
//console.log('english');
  var en_title='Contact Form';
  var en_subtitle='Subject of your request';
  var en_option0='Become Reseller';
  var en_option1='Request product information';
  var en_option2='Defective Product';
  var en_option3='Apply';
  var en_option4='Invoice Request';
  var en_option5='Partnership';
  var en_name='First Name';
  var en_placeholder='First Name';
  var en_lname='Last Name';
  var en_lplaceholder='Last Name';
  var en_Company='Company';
  var en_compplaceholder='Company';
  var en_Country='Country';
  var en_Countryplace='Country of residence';
  var en_Phone='Phone';
  var en_message='Your message';
  var en_msgplace='Your message';
  var en_email='Email';
  var en_emailplace='Enter Email';
  var en_button='Send';
  var en_Invoice='Invoice';
  var en_Video='Video of the problem';
  var en_order='Order Number';
  var en_orderplace='Order ref';
  var en_tik_tok='Your Tik-Tok account';  
  var en_tiktok_place=' Enter URL, Example https://www.tiktok.com/username';
  var en_instagram='Your Instagram account';  
  var en_instagram_place=' Enter URL, Example : https://instagram.com/cloudb';
  var en_facebook='Your Facebook page';  
  var en_facebook_place='Enter URL, Example : https://facebook.com/cloudb';
  var en_mediakit='Media kit';  
  var en_paragraph='It is necessary to send a proof of the malfunction and the invoice of the product concerned';  
  var en_cv='Resume';
  var en_cvspan='Choose File';
  var en_cvinput='No file chosen'; 
  var en_mediaspan='Choose File';
  var en_mediainput='No file chosen';
  var en_invoicespan='Choose File';
  var en_invoiceinput='No file chosen';
  var en_vfilespan='Choose File';
  var en_vfileinput='No file chosen';
}
else if( lang=='de' ){
  var en_title='Kontakt Formular';
  var en_subtitle='Thema Ihrer Anfrage';
  var en_option0='Werden Sie Wiederverkäufer';
  var en_option1='Produktinformationen anfordern';
  var en_option2='Defektes Produkt';
  var en_option3='Bewerben';
  var en_option4='Rechnungsanfrage';
  var en_option5='Partnerschaft';
  var en_name='Vorname';
  var en_placeholder='Vorname';
  var en_lname='Nom';
  var en_lplaceholder='Nom';
  var en_Company='Unternehmen';
  var en_compplaceholder='Aufenthaltsland';
  var en_Country='Zahlt';
  var en_Countryplace='Zahlt';
  var en_Phone='Telefon';
  var en_message='Ihre Nachricht';
  var en_msgplace='Ihre Nachricht';
  var en_email='Email';
  var en_emailplace='Email eingeben';
  var en_button='Schicken';
  var en_Invoice='Fakt';
  var en_Video='Video des Problems';
  var en_order='Bestellnummer';
  var en_orderplace='Bestellnr';
  var en_tik_tok='Ihr Tik-Tok-Konto';  
  var en_tiktok_place=' URL eingeben, Example https://www.tiktok.com/username';
  var en_instagram='Dein Instagram-Konto';  
  var en_instagram_place=' URL eingebenL, Example : https://instagram.com/cloudb';
  var en_facebook='Ihre Facebook-Seite';  
  var en_facebook_place='URL eingeben, Example : https://facebook.com/cloudb';
  var en_mediakit='Media kit';  
  var en_paragraph='Es ist erforderlich, einen Nachweis der Störung und die Rechnung des betreffenden Produkts einzusenden';  
  var en_cv='Lebenslauf';
  var en_cvspan='Datei wählen';
  var en_cvinput='Keine Datei ausgewählt'; 
  var en_mediaspan='Datei wählen';
  var en_mediainput='Keine Datei ausgewählt';
  var en_invoicespan='Datei wählen';
  var en_invoiceinput='Keine Datei ausgewählt';
  var en_vfilespan='Datei wählen';
  var en_vfileinput='Keine Datei ausgewählt';
  var en_Country_reseller='Zahlt';
  var en_sel_option_1='Andere';
  var en_sel_option_2='Frankreich';
}
else if( lang=='es' ){
var en_title='Formulario de Contacto';
var en_subtitle='Tema de tu solicitud';
var en_option0='Conviértete en revendedor';
var en_option1='Solicitar información del producto';
var en_option2='Producto Defectuoso';
var en_option3='Aplicar';
var en_option4='Petición de factura';
var en_option5='Camaradería';
var en_name='Nombre de pila';
var en_placeholder='Nombre de pila';
var en_lname='Apellido';
var en_lplaceholder='Apellido';
var en_Company='Compañía';
var en_compplaceholder='Compañía';
var en_Country='País';
var en_Countryplace='País de residencia';
var en_Phone='Teléfono';
var en_message='Vuestro mensaje';
var en_msgplace='Vuestro mensaje';
var en_email='Correo electrónico';
var en_emailplace='Ingrese correo electrónico';
var en_button='Enviar a';
var en_Invoice='Factura';
var en_Video='Vídeo del problema';
var en_order='Número de orden';
var en_orderplace='Referencia del pedido';
var en_tik_tok='Tu cuenta Tik-Tok';  
var en_tiktok_place='Introducir URL, Example https://www.tiktok.com/username';
var en_instagram='Tu cuenta de instagram';  
var en_instagram_place=' Introducir URL, Example : https://instagram.com/cloudb';
var en_facebook='Tu pagina de facebook';  
var en_facebook_place='Introducir URL, Example : https://facebook.com/cloudb';
var en_mediakit='kit de medios';  
var en_paragraph='Es necesario enviar prueba del mal funcionamiento y la factura del producto en cuestión.';  
var en_cv='Reanudar';
var en_cvspan='Elija el archivo';
var en_cvinput='ningún archivo elegido'; 
var en_mediaspan='Elija el archivo';
var en_mediainput='ningún archivo elegido';
var en_invoicespan='Elija el archivo';
var en_invoiceinput='ningún archivo elegido';
var en_vfilespan='Elija el archivo';
var en_vfileinput='ningún archivo elegido';
var en_Country_reseller='País';
var en_sel_option_1='Otro';
var en_sel_option_2='Francia';
}

else if( lang=='it' ){

var en_title='Modulo di Contatto';
var en_subtitle='Oggetto della vostra richiesta';
var en_option0='Diventa un rivenditore';
var en_option1='Richiedi informazioni sul prodotto';
var en_option2='Prodotto difettoso';
var en_option3='Applicare';
var en_option4='Richiesta di fattura';
var en_option5='Associazione';  
var en_name='Nome';
var en_placeholder='Nome';
var en_lname='Cognome';
var en_lplaceholder='Cognome';
var en_Company='Azienda';
var en_compplaceholder='Azienda';
var en_Country='Paese';
var en_Countryplace='Paese di residenza';
var en_Phone='Telefono';
var en_message='Il tuo messaggio';
var en_msgplace='Il tuo messaggio';
var en_email='E-mail';
var en_emailplace="Inserisci l'email";
var en_button='Mandare';
var en_Invoice='Fattura';
var en_Video='Video del problema';
var en_order="Numero d'ordine";
var en_orderplace='Ordine rif';
var en_tik_tok='Il tuo account Tik-Tok';  
var en_tiktok_place="Inserisci l'URL, Example https://www.tiktok.com/username";
var en_instagram='Il tuo account Instagram';  
var en_instagram_place="Inserisci l'URL, Example : https://instagram.com/cloudb";
var en_facebook='La tua pagina Facebook';  
var en_facebook_place="Inserisci l'URL, Example : https://facebook.com/cloudb";
var en_mediakit='Media kit ';  
var en_paragraph='È necessario inviare la prova del malfunzionamento e la fattura del prodotto in questione';  
var en_cv='Riprendere';
var en_cvspan='Scegli il file';
var en_cvinput='Nessun file scelto'; 
var en_mediaspan='Scegli il file';
var en_mediainput='Nessun file scelto';
var en_invoicespan='Scegli il file';
var en_invoiceinput='Nessun file scelto';
var en_vfilespan='Scegli il file';
var en_vfileinput='Nessun file scelto';
var en_Country_reseller='Paese';
var en_sel_option_1='Altro';
var en_sel_option_2='Francia';

}

else if( lang=='pl' ){
  var en_title='Contact Form';
  var en_subtitle='Przedmiot Twojej prośby';
  var en_option0='Zostań sprzedawcą ';
  var en_option1='Poproś o informacje o produkcie';
  var en_option2='Produkt z wadą';
  var en_option3='Aplikować';
  var en_option4='Żądanie faktury';
  var en_option5='Współpraca';
  var en_name='Imię';
  var en_placeholder='Imię';
  var en_lname='Nazwa';
  var en_lplaceholder='Nazwa';
  var en_email='E-mail';
  var en_emailplace='Wprowadź e-mail';
  var en_Country='Kraj';
  var en_Countryplace='Kraj';
  var en_message='Twoja wiadomość';
  var en_msgplace='Twoja wiadomość';
  var en_button='wysłać';
  var en_Company='Firma';
  var en_compplaceholder='Firma'; 
  var en_Phone='Telefon';
  var en_paragraph='Konieczne jest przesłanie dowodu usterki oraz faktury za reklamowany produkt';  
  var en_order='Numer zamówienia';
  var en_orderplace='Nr zamówienia';
  var en_cvspan='Wybierz plik';
  var en_cvinput='nie wybrano pliku';
  var en_mediaspan='Wybierz plik';
  var en_mediainput='nie wybrano pliku';
  var en_invoicespan='Wybierz plik';
  var en_invoiceinput='nie wybrano pliku';
  var en_vfilespan='Wybierz plik';
  var en_vfileinput='nie wybrano pliku';
  var en_Invoice='Rachunek'; 
  var en_Video='Wideo problemu';
  var en_cv='wznawiać';  
  var en_tik_tok='Twoje konto Tik-Tok';  
  var en_tiktok_place='Wprowadź adres URL — przykład https://www.tiktok.com/nazwa_użytkownika';  
  var en_instagram='Twoje konto na Instagramie';  
  var en_instagram_place=' Wprowadź adres URL, przykład: https://instagram.com/cloudb';  
  var en_facebook='Twoja strona na Facebooku';  
  var en_facebook_place='Wprowadź adres URL, przykład: https://facebook.com/cloudb';
  var en_mediakit='zestaw multimedialny';  

var en_Country_reseller='Kraj';
var en_sel_option_1='Inny';
var en_sel_option_2='Francja';
}

  else if( lang=='nl' ){
  var en_title='Contact Form';
  var en_subtitle='Onderwerp van je aanvraag';
  var en_option0='Wederverkoper worden';
  var en_option1='Vraag productinformatie aan';
  var en_option2='Defect product';
  var en_option3='Toepassen';
  var en_option4='Factuur verzoek';
  var en_option5='Vennootschap';  
  var en_name='Voornaam';
  var en_placeholder='Voornaam';
  var en_lname='Naam';
  var en_lplaceholder='Naam';
  var en_email='E-mailen';
  var en_emailplace='Voer email in';
  var en_Country='Land';
  var en_Countryplace='Land';
  var en_message='Jouw bericht';
  var en_msgplace='Jouw bericht';
  var en_button='sturen';
  var en_Company='Bedrijf';
  var en_compplaceholder='Bedrijf';
  var en_Phone='Telefoon';
  var en_paragraph='Het is noodzakelijk om een ​​bewijs van de storing en de factuur van het betreffende product mee te sturen';  
  var en_Invoice='Factuur'; 
  var en_Video='Video van het probleem';  
  var en_order='Bestellingsnummer';
  var en_orderplace='aanbevelen';
  var en_cvspan='Kies bestand';
  var en_cvinput='geen bestand geselecteerd'; 
  var en_mediaspan='Kies bestand';
  var en_mediainput='geen bestand geselecteerd';
  var en_invoicespan='Kies bestand';
  var en_invoiceinput='geen bestand geselecteerd';
  var en_vfilespan='Kies bestand';
  var en_vfileinput='geen bestand geselecteerd';
  var en_cv='cv';  
  var en_tik_tok='Je Tik-Tok-account';  
  var en_tiktok_place='Voer de url in - Voorbeeld https://www.tiktok.com/username';
  var en_instagram='Je Instagram-account';  
  var en_instagram_place='Vul de url in, Voorbeeld: https://instagram.com/cloudb';
  var en_facebook='Je Facebook-pagina';  
  var en_facebook_place='Voer de url in, voorbeeld: https://facebook.com/cloudb';
  var en_mediakit='mediakit';  

var en_Country_reseller='Land';
var en_sel_option_1='Ander';
var en_sel_option_2='Frankrijk';
}
 else if( lang=='fr' ) {
  //   var en_title='Formulaire de contact';
  // var en_subtitle='Sujet de votre demande';
  //   var en_option0='Devenir revendeur';
  //   var en_option1='Demander des informations sur le produit';
  //   var en_option2='Produit defectueux';
  //   var en_option3='Appliquer';
  //   var en_option4='Demande de facturation';
  //   var en_option5='Partenariat';
     var en_button='envoyer';
     var en_tiktok_place= "Entrez l'url - Example https://www.tiktok.com/username";
     var en_instagram_place=" Entrez l'url, Example : https://instagram.com/cloudb"; 
     var en_facebook_place="Entrez l'url, Example : https://facebook.com/cloudb"; 
     var en_email='E-mail';
     var en_emailplace='Entrez l e-mail';
    var en_Country_reseller='Pays';
    var en_sel_option_1='Autre';
    var en_sel_option_2='France';
 
 }
   
else if( lang=='sv' ){
  var en_title='Contact Form';
  var en_subtitle='Ämnet för din begäran';
  var en_option0='Bli återförsäljare';
  var en_option1='Begär produktinformation ';
  var en_option2='Trasig vara';
  var en_option3='Att ansöka';
  var en_option4='Faktura begäran';
  var en_option5='Partnerskap';   
  var en_name='Förnamn';
  var en_placeholder='Förnamn'; 
  var en_lname='namn';
  var en_lplaceholder='namn';
  var en_email='E-post';
  var en_emailplace='Skriv in e-mail';
  var en_Country='Land';
  var en_Countryplace='Land'; 
  var en_message='Ditt meddelande';
  var en_msgplace='Ditt meddelande'; 
  var en_button='skicka'; 
  var en_Company='Företag';
  var en_compplaceholder='Företag';  
  var en_Phone='Telefon'; 
  var en_paragraph='Det är nödvändigt att skicka bevis på felet och fakturan för den berörda produkten';   
  var en_Invoice='Räkningen'; 
  var en_Video='Video av problemet';  
  var en_order='Ordernummer';
  var en_orderplace='Beställningsref';  
  var en_cvspan='Välj FIL';
  var en_cvinput='ingen fil vald'; 
  var en_mediaspan='Välj FIL';
  var en_mediainput='ingen fil vald';
  var en_invoicespan='Välj FIL';
  var en_invoiceinput='ingen fil vald';
  var en_vfilespan='Välj FIL';
  var en_vfileinput='ingen fil vald'; 
  var en_cv='återuppta';  
  var en_tik_tok='Ditt Tik-Tok-konto';  
  var en_tiktok_place='Ange url - Exampel https://www.tiktok.com/användarnamn';
  var en_instagram='Ditt Instagram-konto';  
  var en_instagram_place='Ange webbadressen, Exampel: https://instagram.com/cloudb';
  var en_facebook='Din Facebook-sida';  
  var en_facebook_place='Ange URL, Exampel: https://facebook.com/cloudb';
  var en_mediakit='mediakit';
  
  var en_Country_reseller='Land';
    var en_sel_option_1='Övrig';
    var en_sel_option_2='Frankrike';
}
 
  
  $(title).html(en_title);
  $(sub_title).html(en_subtitle);
  $(sel_option0).text(en_option1);
  $(sel_option1).text(en_option0);
  $(sel_option2).html(en_option2);
  $(sel_option3).html(en_option3);
  $(sel_option4).html(en_option4);
  $(sel_option5).html(en_option5);
  $(name).html(en_name); 
  $(name_placeholder).attr('placeholder',en_placeholder);
  $(lname).html(en_lname); 
  $(lname_placeholder).attr('placeholder',en_lplaceholder);
  $(Company).html(en_Company); 
  $(Company_placeholder).attr('placeholder',en_compplaceholder);
  $(Country).html(en_Country); 
  $(Country_placeholder).attr('placeholder',en_Countryplace);
  $(Phone).html(en_Phone); 
  $(message).html(en_message); 
  $(msg_placeholder).attr('placeholder',en_msgplace);
  $(email).html(en_email); 
  $(email_placeholder).attr('placeholder',en_emailplace);
  $(button).html(en_button); 
  $(Invoice).html(en_Invoice); 
  $(Video).html(en_Video); 
  $(order_number).html(en_order); 
  $(orde_placeholder).attr('placeholder',en_orderplace);
  $(tik_tok).html(en_tik_tok); 
   $(tiktok_placeholder).attr('placeholder',en_tiktok_place);
  $(instagram).html(en_instagram); 
   $(instagram_placeholder).attr('placeholder',en_instagram_place);
  $(facebook).html(en_facebook); 
  $(facebook_placeholder).attr('placeholder',en_facebook_place);
  $(media_kit).html(en_mediakit); 
  $(paragraph).html(en_paragraph); 
  $(Cv).html(en_cv); 
  
  $(CV_span).html(en_cvspan); 
  $(CV_input).attr('placeholder',en_cvinput);
  
  $(media_span).html(en_mediaspan); 
  $(media_input).attr('placeholder',en_mediainput);
  
  (Invoice_span).html(en_invoicespan); 
  $(Invoice_input).attr('placeholder',en_invoiceinput);

  (filevdo_span).html(en_vfilespan); 
  $(filevdo_input).attr('placeholder',en_vfileinput);


  
  $(Country_reseller).html(en_Country_reseller); 
  $(sel_option_1).html(en_sel_option_1);
  $(sel_option_2).html(en_sel_option_2);

  $('body').on('click', '.cs-form-wrap button[type="submit"]', function () {
  //console.log('error_msg');
  setTimeout(function() {
  var error_msg=$(".element-group").find(".alert-error");
  var success_msg=$(".element-group").find(".alert-success");
   var help_block = $(".element-group").find(".help-block");
    // console.log(success_msg);
// (error_msg).html(''); 
// (success_msg).html('');



//     if(lang=='fr'){
//   var new_block = 'Ce champ est obligatoire.';

// }  
// else if(lang=='de'){
//       var new_block = 'Dieses Feld ist erforderlich.';
//     }
// else if(lang=='nl'){
//      var new_block = 'Dit veld is verplicht.';
//   }
// else if(lang=='pl'){
//     var new_block = 'To pole jest wymagane.';
//     }
// else if(lang=='it'){
//     var new_block = 'Questo campo è obbligatorio.';
//       }  
// else if(lang=='es'){
//       var new_block = 'Este campo es obligatorio.';
//     }
// else if(lang=='sv'){
//   var new_block = 'Detta fält är obligatoriskt.';
// }
  

    
if(lang=='fr'){
  var new_block = 'Ce champ est obligatoire.';
  var new_error = 'Les données fournies étaient invalides.';
  var new_success = "Merci de m'avoir contacté! Nous apprécions que vous nous contactiez. Un de nos collègues vous recontactera bientôt !";
}
  
else if( lang=='de'){
    var new_block = 'Dieses Feld ist erforderlich.';
  var new_error = 'Die angegebenen Daten waren ungültig.';
  var new_success ="Vielen Dank für Ihre Kontaktaufnahme! Wir freuen uns über Ihre Kontaktaufnahme. Einer unserer Kollegen wird sich bald wieder bei Ihnen melden!";
    }
else if( lang=='es'){
  var new_block = 'Este campo es obligatorio.';
  var new_error = 'Los datos proporcionados no son válidos.';
  var new_success ="¡Gracias por ponerte en contacto! Agradecemos que se comunique con nosotros. ¡Uno de nuestros colegas se pondrá en contacto con usted pronto!";
    }
else if( lang=='it'){
  var new_block = 'Questo campo è obbligatorio.';
  var new_error = 'I dati forniti non erano validi.';
  var new_success ="Grazie per averci contattato! Ti ringraziamo per averci contattato. Uno dei nostri colleghi ti ricontatterà presto!";
}
else if( lang=='pl'){
      var new_block = 'To pole jest wymagane.';
     var new_error = 'Podane dane były nieprawidłowe.';
     var new_success ="Dziękujemy za kontakt! Dziękujemy za skontaktowanie się z nami. Jeden z naszych kolegów wkrótce się z Tobą skontaktuje!";
    }
  else if( lang=='nl'){
      var new_block = 'Dit veld is verplicht.';
      var new_error = 'De opgegeven gegevens waren ongeldig.';
      var new_success ="Bedankt voor het contact! We stellen het op prijs dat u contact met ons opneemt. Een van onze collega's neemt zo spoedig mogelijk contact met u op!";
  }
else if( lang=='sv'){
    var new_block = 'Detta fält är obligatoriskt.';
     var new_error = 'De angivna uppgifterna var ogiltiga.';
    var new_success ="Tack för att du hör av dig! Vi uppskattar att du kontaktar oss. En av våra kollegor kommer snart att kontakta dig igen!";
}
 
$(error_msg).html(new_error); 
$(success_msg).html(new_success);
$(help_block).html(new_block);     
    }, 700);
});







$('body').on('click', '.cs-form-wrap button[type="submit"]', function () {
      var upload_file_input = $("#CV")[0].files.length;
      var upload_Facture_input = $("#Facture")[0].files.length;
      var upload_new_file_input = $("#file")[0].files.length;
      var upload_media_kit_file_input = $("#envoyez_votre_kit_média")[0].files.length;

      if(upload_file_input === 0){
        $('#CV').closest('.element-group').find(".file_input").addClass("intro");
      } 
      else{
        $('#CV').closest('.element-group').find(".file_input").removeClass("intro");
      } 

      if(upload_Facture_input === 0){
        $('#Facture').closest('.element-group').find(".file_input").addClass("intro");
      } 
      else{
        $('#Facture').closest('.element-group').find(".file_input").removeClass("intro");
      } 

      if(upload_new_file_input === 0){
        $('#file').closest('.element-group').find(".file_input").addClass("intro");
      } 
      else{
        $('#file').closest('.element-group').find(".file_input").removeClass("intro");
      } 

       if(upload_media_kit_file_input === 0){
        $('#envoyez_votre_kit_média').closest('.element-group').find(".file_input").addClass("intro");
      } 
      else{
        $('#envoyez_votre_kit_média').closest('.element-group').find(".file_input").removeClass("intro");
      }    
      });
 
});




  