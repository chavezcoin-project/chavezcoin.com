class Spinach::Features::ViewingHomepage < Spinach::FeatureSteps

  before do
    @advantages = File.read("#{Rails.root}/public/advantages.json").to_json
    @faqs = File.read("#{Rails.root}/public/faqs.json").to_json
    @posts = File.read("#{Rails.root}/public/blog.json").to_json
    @slider = File.read("#{Rails.root}/public/slider.json").to_json
    @text_yellow = File.read("#{Rails.root}/public/text_yellow.json").to_json
    @text_blue = File.read("#{Rails.root}/public/text_blue.json").to_json
    @text_red = File.read("#{Rails.root}/public/text_red.json").to_json
    @graphicData = File.read("#{Rails.root}/public/transaction.json").to_json
    @coins = HTTParty.get('http://coinmarketcap.northpole.ro/ticker.json?symbol=ETH%2CBTC%2CGBYTE%2CSNT%2CXRP%2CLTC%2CDOGE%2CXEM%2CDASH%2CIOTA%2CXMR%2CZEC%2CGNO&page=0')
    puts @coins.body, @coins.code, @coins.message, @coins.headers.inspect
    @markets = HTTParty.get('https://api.cryptonator.com/api/full/btc-usd')
    puts @markets.body, @markets.code, @markets.message, @markets.headers.inspect
  end

  step 'I should see a nav menu' do
    expect(page).to have_selector('nav.nav-menu')
  end

  step 'I should see banner with counter' do
    expect(page).to have_selector('div.skew-container-abstract')
  end

  step 'I click details' do
    pending 'step not implemented'
  end

  step 'I should see the graphic details' do
    pending 'step not implemented'
  end

  step 'I should see the guide section' do
    pending 'step not implemented'
  end

  step 'I click in the title' do
    pending 'step not implemented'
  end

  step 'I should see the content' do
    pending 'step not implemented'
  end

  step 'I should see an animation' do
    pending 'step not implemented'
  end

  step 'I should see the advantages boxes' do
    pending 'step not implemented'
  end

  step 'I should see a list of cryptocurrencies' do
    pending 'step not implemented'
  end

  step 'I click the coin interruptor' do
    pending 'step not implemented'
  end

  step 'I should see the currency data' do
    pending 'step not implemented'
  end

  step 'I should see a list of exchanges' do
    pending 'step not implemented'
  end

  step 'I should see a gallery mobile draw' do
    pending 'step not implemented'
  end

  step 'I should see the latest blog post' do
    pending 'step not implemented'
  end

  step 'I should see a list of faqs' do
    pending 'step not implemented'
  end
end
