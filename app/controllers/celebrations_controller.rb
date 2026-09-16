class CelebrationsController < ApplicationController
  def index
    @photos = (1..12).map do |number|
      {
        path: "photos/#{number}.jpeg",
        caption: photo_captions[number - 1]
      }
    end
  end

  private

  def photo_captions
    [
      "Tu sonrisa ilumina cualquier momento.",
      "Celebrando la vida y cada cumpleaños a tu lado, mi Mocito.",
      "Verte disfrutar una buena comida siempre me alegra el día.",
      "Cualquier evento o lugar se vuelve especial si voy contigo.",
      "Nuestros paseos y escapadas a la montaña.",
      "Nuestras comidas ricas compartiendo juntos, mi Piruriru.",
      "Mi vista favorita en el mundo: tú al otro lado de la mesa.",
      "Esa hermosa sonrisa tuya que me llena el corazón.",
      "Tardes de sol, tranquilidad y tu compañía inigualable.",
      "Acompañándonos siempre en los momentos más importantes.",
      "Tu abrazo y tu amor que iluminan todos mis días grises.",
      "Tú y yo juntos en cada aventura, escribiendo nuestra propia historia."
    ]
  end
end