require 'rails_helper'
RSpec.feature 'test', js: true do
  feature 'Site loaded' do
    before do
      visit root_path
      save_and_open_page
    end
    scenario 'Seeing sections' do
      expect(page).to have_selector('nav.nav-menu')
      expect(page).to have_selector('.abstract-banner')
      expect(page).to have_selector('.blur-container')
      expect(page).to have_selector('.transaction-counter-container')
      expect(page).to have_selector('.graphic-container', visible: :hidden)
      expect(page).to have_selector('.draw-container', visible: :hidden)
      expect(page).to have_selector('.guide-container')
      expect(page).to have_selector('.advantages-container')
      expect(page).to have_selector('.market-container')
      expect(page).to have_selector('.app-container')
      expect(page).to have_selector('.blog-container')
      expect(page).to have_selector('.faq-container')
      expect(page).to have_selector('footer.pure-g')
    end
  end
end