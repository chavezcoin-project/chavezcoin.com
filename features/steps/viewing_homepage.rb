class Spinach::Features::ViewingHomepage < Spinach::FeatureSteps

  before do
    visit root_path
  end

  step 'I should see a nav menu' do
    expect(page).to have_selector('nav.nav-menu')
  end

  step 'I should see banner with counter' do
    expect(page).to have_selector('.abstract-banner')
    expect(page).to have_selector('.pure-u-1.transaction-counter.-blur')
  end

  step 'I scroll down' do
    page.execute_script(%Q{$('html,body').animate({scrollTop: 100}, 1000)})
    sleep 1
  end

  step 'I should see the nav with scrolled class' do
    expect(page).to have_selector('.pure-g.nav-menu.pure-menu-horizontal.-scrolled')
    expect(page).to have_selector('.pure-u-1.transaction-counter.-blur-nav')
    expect(page).to have_selector('.pure-u-1.transaction-counter.-blur', visible: :hidden)
  end

  step 'I click details' do
    click_link('Detalles')
  end

  step 'I should see the graphic details' do
   expect(page).to have_css("section.transaction-counter-container.active")
    expect(page).to have_selector('.graphic-container')
  end

  step 'I should see the guide section' do
   expect(page).to have_css('.draw-container', visible: false)
    expect(page).to have_selector('.guide-container')
  end

  step 'I click in the title' do
    first("h3.guide-expand").click
    sleep 1
  end

  step 'I should see the content' do
    expect(page).to have_css('.pure-u-1.guide.-inverted.-yellow.-active')
    expect(page).to have_selector('.video-container', visible: true)
  end

  step 'I should see an animation' do
    first("a[href='#guide']").click
    page.execute_script(%Q{$('html,body').animate({scrollTop: ($('#guide').offset().top + 25)}, 5000)})
    sleep 2
    expect(page).to have_selector('.draw-container')
  end

  step 'I should see the advantages boxes' do
    first("a[href='#advantages']").click
    page.execute_script(%Q{$('html,body').animate({scrollTop: ($('#advantages').offset().top + 10)}, 1000)})
    expect(page).to have_selector('.advantages-container')
    sleep 5
    expect(page).to have_selector('.box-color.-yellow.-upleft.-scrolled')
  end

  step 'I should see a list of cryptocurrencies' do
    expect(page).to have_selector('.market-container')
  end

  step 'I click the coin interruptor' do
    first(".slide-interruptor").click
    sleep 1
    expect(page).to have_selector('.pure-u-13-24.slide-interruptor.-on')
  end

  step 'I should see the currency data' do
    expect(page).to have_css(".tag-text.-white.coin-name.-capitalize", text: "Bitcoin")
    expect(page).not_to have_css(".tag-text.-white.coin-priceusd", text: :null)
    expect(page).not_to have_css(".tag-text.-white.coin-update", text: :null)
    expect(page).not_to have_css(".tag-text.-white.coin-volume24", text: :null)
    expect(page).not_to have_css(".tag-text.-yellow.coin-change", text: :null)
  end

  step 'I should see a list of exchanges' do
    expect(page).to have_selector('.limited-wrapper.market-list.-flex-center')
  end

  step 'I should see a gallery mobile draw' do
    expect(page).to have_selector('.app-container')
  end

  step 'I should see the latest blog post' do
    expect(page).to have_selector('.blog-container')
  end

  step 'I should see a list of faqs' do
    expect(page).to have_selector('.faq-container')
  end
  step 'I click a question' do
    first("h3.faq.main-title.-black.-left.-fullwidth").click
    sleep 1
  end
  step 'I should see an answer' do
    expect(page).to have_selector('.answer.active')
  end
end
