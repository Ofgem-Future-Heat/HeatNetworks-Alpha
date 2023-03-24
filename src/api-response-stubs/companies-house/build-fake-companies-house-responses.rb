#!/usr/bin/env ruby

=begin
 brew install ruby
 export PATH="/usr/local/opt/ruby/bin:$PATH"
 gem install faker
 ruby build-fake-companies-house-responses.rb
=end

require 'faker'
require 'securerandom'
require 'json'

numberOfFakeCompanies = 10
output = {}

  # generate random data
  Faker::Config.locale = 'en-GB'



  x = 0
  while x < numberOfFakeCompanies

    company_name = Faker::Company.bs
    company_number = Faker::Number.number(digits: 8)
    county = Faker::Address.state
    country = "UK"
    town = Faker::Address.city
    address1 = Faker::Address.street_name
    address2 = Faker::Address.street_address
    postcode = Faker::Address.postcode

    data = {
            "#{company_number}": {
            "accounts": {
                "accounting_reference_date": {
                    "day": "integer",
                    "month": "integer"
                },
                "last_accounts": {
                    "made_up_to": "date",
                    "type": {}
                },
                "next_due": "date",
                "next_made_up_to": "date",
                "overdue": "boolean"
            },
            "annual_return": {
                "last_made_up_to": "date",
                "next_due": "date",
                "next_made_up_to": "date",
                "overdue": "boolean"
            },
            "branch_company_details": {
                "business_activity": "string",
                "parent_company_name": "string",
                "parent_company_number": "string"
            },
            "can_file": "boolean",
            "company_name": company_name,
            "company_number": company_number,
            "company_status": "string",
            "company_status_detail": "string",
            "confirmation_statement": {
                "last_made_up_to": "date",
                "next_due": "date",
                "next_made_up_to": "date",
                "overdue": "boolean"
            },
            "date_of_cessation": "date",
            "date_of_creation": "date",
            "etag": "string",
            "foreign_company_details": {
                "accounting_requirement": {
                    "foreign_account_type": "string",
                    "terms_of_account_publication": "string"
                },
                "accounts": {
                    "account_period_from:": {
                        "day": "integer",
                        "month": "integer"
                    },
                    "account_period_to": {
                        "day": "integer",
                        "month": "integer"
                    },
                    "must_file_within": {
                        "months": "integer"
                    }
                },
                "business_activity": "string",
                "company_type": "string",
                "governed_by": "string",
                "is_a_credit_finance_institution": "boolean",
                "originating_registry": {
                    "country": "string",
                    "name": "string"
                },
                "registration_number": "string"
            },
            "has_been_liquidated": "boolean",
            "has_charges": "boolean",
            "has_insolvency_history": "boolean",
            "is_community_interest_company": "boolean",
            "jurisdiction": "string",
            "last_full_members_list_date": "date",
            "links": {
                "persons_with_significant_control": "string",
                "persons_with_significant_control_statements": "string",
                "registers": "string",
                "self": "string"
            },
            "previous_company_names": [
                {
                    "ceased_on": "date",
                    "effective_from": "date",
                    "name": "string"
                }
            ],
            "registered_office_address": {
                "address_line_1": address1,
                "address_line_2": address2,
                "care_of": "string",
                "country": country,
                "locality": "Cour",
                "po_box": "",
                "postal_code": postcode,
                "premises": "",
                "region": county
            },
            "registered_office_is_in_dispute": "boolean",
            "service_address": {
                "address_line_1": "string",
                "address_line_2": "string",
                "care_of": "string",
                "country": "string",
                "locality": "string",
                "po_box": "string",
                "postal_code": "string",
                "region": "string"
            },
            "sic_codes": [
                "string"
            ],
            "super_secure_managing_officer_count": "integer",
            "type": "string",
            "undeliverable_registered_office_address": "boolean"
    }
}

    output.merge!(data)
    x = x + 1

    end

    out_file = File.new("fabricated.json", "w")
    out_file.puts(output.to_json)
    out_file.close
puts output.to_json
