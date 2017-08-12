class VisitorsController < ApplicationController

  def index
  	@advantages = [
	  {:class => ' box-color -yellow -upleft', :description => 'Chavezcoin no está controlada por ningún Estado, banco o institución financiera.',  :title => 'Descentralizada'},
	  {:class => ' box-color -blue', :description => 'Las transacciones se realizan directamente de persona a persona.',  :title => 'Sin Intermediarios'},
	  {:class => ' box-color -red -upRight', :description => 'Con Chavezcoin tu eres dueño del la id privada y pública que conforman tu cartera. NADIE puede quitártelo.',  :title => 'Es tuyo'},
	  {:class => ' box-color -yellow -downLeft', :description => 'Chavezcoin te permiten preservar tu privacidad al realizar transacciones.',  :title => 'Anónima'},
	  {:class => 'box-color -blue', :description => 'Puedes cambiar tus Chavezcoin en cualquier país del mundo por igual.',  :title => 'Internacional'},
	  {:class => ' box-color -red -downRight', :description => 'Las transacciones son mucho más rápidas que las realizadas a través de entidades financieras.',  :title => 'Rápida'}
	].to_json

	@coins = HTTParty.get('http://coinmarketcap.northpole.ro/ticker.json?symbol=ETH%2CBTC%2CGBYTE%2CSNT%2CXRP%2CLTC%2CDOGE%2CXEM%2CDASH%2CIOTA%2CXMR%2CZEC%2CGNO&page=0')
	puts @coins.body, @coins.code, @coins.message, @coins.headers.inspect
  @markets = HTTParty.get('https://api.cryptonator.com/api/full/btc-usd')
  puts @markets.body, @markets.code, @markets.message, @markets.headers.inspect
  end
end
