# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

import openerp
import re
import logging

from openerp import models, api, fields
from openerp.exceptions import ValidationError